var redditApp = angular.module('redditApp');

redditApp.controller('redditController', ['$scope', '$http', 'appSettings', function ($scope, $http, appSettings) {
    $scope.stories = [];
    $scope.subscribedChannels = angular.fromJson(window.localStorage["subscribedChannels"]);
    
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
            $scope.$broadcast('scroll.infiniteScrollComplete');
        });
    }

    $scope.loadNewer = function () {
        var params = {
            before: $scope.stories[0].name
        };
        refresh(params, function (stories) {
            $scope.stories = stories.concat($scope.stories);
            $scope.$broadcast('scroll.refreshComplete');
        });
    }

    function refresh(params, callback) {
        var stories = [];
        if ($scope.subscribedChannels != undefined && $scope.subscribedChannels.length > 0){
            for(var channel in $scope.subscribedChannels){
                console.log(channel.name);
            }
        }
        //todo, loop subsribed channels
        $http.get(appSettings.channels[0].url, {
                params: params
            })
            .success(function (response) {
                console.log(response);
                //$scope.stories = response.data.children;
                angular.forEach(response.data.children, function (child) {
                    var story = child.data;
                    if (!story.thumbnail || story.thumbnail == 'self' || story.thumbnail == '') {
                        story.thumbnail = 'http://www.redditstatic.com/icon.png';
                    }
                    story.unread = true; // set unread
                    stories.push(story);
                });
                callback(stories);
            })
            .error(function (response) {
                alert("failed to connect");
                console.log("failed to connect");
            });
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
