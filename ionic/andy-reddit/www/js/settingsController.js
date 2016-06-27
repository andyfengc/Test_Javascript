var redditApp = angular.module('redditApp');

redditApp.controller('settingsController', ['$scope', 'appSettings', function($scope, appSettings){
    $scope.name = "john";
}]);

 