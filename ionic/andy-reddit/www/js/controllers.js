var redditApp = angular.module('redditApp');

redditApp.controller('redditController', ['$scope', '$http', 'appSettings', '$log', function ($scope, $http, appSettings, $log) {
    $scope.stories = [];
    $scope.subscribedChannels = angular.fromJson(window.localStorage["subscribedChannels"]);
    var refreshTotalCount = 0;
    var refreshCompletedCount = 0;

    $scope.init = function () {
        console.log($scope.subscribedChannels);
        if ($scope.subscribedChannels == undefined || $scope.subscribedChannels.length == 0) {
            alert('please subsribe channels first');
        }
    }
    $scope.init();

    $scope.loadOlder = function () {
        var params = {};
        if ($scope.stories.length > 0) {
            params["after"] = $scope.stories[$scope.stories.length - 1].name;
        }
        refresh(params, function (stories) {
            $scope.stories = $scope.stories.concat(stories);
            refreshCompletedCount++;
            if (refreshCompletedCount == refreshTotalCount) {
                $scope.$broadcast('scroll.infiniteScrollComplete');
                refreshCompletedCount = 0;
            }
        });
    }

    $scope.loadNewer = function () {
        var params = {
            before: $scope.stories[0].name
        };
        refresh(params, function (stories) {
            $scope.stories = stories.concat($scope.stories);
            refreshCompletedCount++;
            if (refreshCompletedCount == refreshTotalCount) {
                $scope.$broadcast('scroll.refreshComplete');
                refreshCompletedCount = 0;
            }
        });
    }

    function fireRefreshStartedEvent(count) {
        refreshCount = count;
    }

    function refresh(params, callback) {

        if ($scope.subscribedChannels == undefined || $scope.subscribedChannels.length == 0) {
            //alert('please subsribe channels first');
        } else {
            // start download
            refreshTotalCount = $scope.subscribedChannels.length;

            for (var subscribedChannel in $scope.subscribedChannels) {

                var channel = $scope.subscribedChannels[subscribedChannel];
                $log.debug("start grabbing: " + channel.name);

                $http.get(channel.url, {
                        params: params
                    })
                    .success(function (response) {
                        var stories = [];
                        $log.debug("grabbed result: " + response);
                        //$scope.stories = response.data.children;
                        angular.forEach(response.data.children, function (child) {
                            var story = child.data;
                            if (!story.thumbnail || story.thumbnail == 'self' || story.thumbnail == '') {
                                story.thumbnail = 'http://www.redditstatic.com/icon.png';
                            }
                            story.unread = true; // set unread
                            stories.push(story);
                        });
                        // complete download
                        callback(stories);
                    })
                    .error(function (response) {
                        allSuccess = false;
                        alert("failed to connect");
                        $log.error("failed to connect");
                    });
            }
        }
        $log.info("finished");
    }

    //$scope.loadMore();

    $scope.onHold = function (title) {
        console.log("you pressed " + title);
    };

    $scope.openStory = function (story) {
        window.open(story.url, "_blank");
        story.unread = false;
    }
    $scope.getUnreadCount = function () {
        var count = 0;
        angular.forEach($scope.stories, function (story, key) {
            if (story.unread) {
                count++;
            }
        });
        return count;
    }

    $scope.updateSettings = function () {

    }
    $scope.save = function () {
        window.localStorage["stories"] = angular.toJson($scope.stories);
    }

    }])
