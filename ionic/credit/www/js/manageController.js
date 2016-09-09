var weightApp = angular.module("weightApp");

weightApp.controller("manageController", ['$scope', '$log', '$state', '$window', function($scope, $log, $state, $window){
    $log.debug("start manage controller");
    $scope.dataList = angular.fromJson(window.localStorage["weightList"]) || [];
}]);
