var redditApp = angular.module('redditApp');

redditApp.controller('settingsController', ['$scope', 'appSettings', function ($scope, appSettings) {
    $scope.channels = appSettings.channels;
    $scope.subscribedChannels = [];
    
    $scope.init = function(){
        // todo, check subscribed channels
    }
    $scope.init();

    $scope.save = function(){
        for (var key in $scope.channels){
            var channel = $scope.channels[key];
            if (channel.checked){
                //console.log(channel.name);
                $scope.subscribedChannels.push(channel);
            }
        }
        window.localStorage['subscribedChannels'] = angular.toJson($scope.subscribedChannels);
    }
}]);
