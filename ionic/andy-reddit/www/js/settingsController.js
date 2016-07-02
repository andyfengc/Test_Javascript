var redditApp = angular.module('redditApp');

redditApp.controller('settingsController', ['$scope', 'appSettings', '$window', '$log', function ($scope, appSettings, $window, $log) {
    $scope.channels = appSettings.channels;
    $scope.subscribedChannels = angular.fromJson(window.localStorage["subscribedChannels"]);
    
    function containsChannel(channels, channel){
        for(var i = 0; i < channels.length; i++){
            if (channels[i].name == channel.name){
                return true;
            }
        }
        return false;
    }
    
    $scope.init = function(){
        if ($scope.subscribedChannels == undefined){
            $scope.subscribedChannels = [];
        }
        // check subscribed channels
        for (var key in $scope.channels){
            var channel = $scope.channels[key];
            if (containsChannel($scope.subscribedChannels, channel)){ // already subscribed
                channel.checked = true;
            }
        }
        $log.debug("restore saved channels: " + $scope.channels);
    }
    $scope.init();

    $scope.save = function(){
        $scope.subscribedChannels = [];
        for (var key in $scope.channels){
            var channel = $scope.channels[key];
            if (channel.checked){
                //console.log(channel.name);
                $scope.subscribedChannels.push(channel);
            }
        }
        // save
        window.localStorage['subscribedChannels'] = angular.toJson($scope.subscribedChannels);
        $log.debug("you saved channels: " + $scope.subscribedChannels);
        // return
        window.location.href="#/list";
        $window.location.reload(true);
    }
}]);
