var weightApp = angular.module("weightApp");

weightApp.controller("appController", ['$scope', '$log', function($scope, $log){
    $log.debug("start app controller");
}])

.controller("addController", ['$scope', '$log', function($scope, $log){
    $log.debug("start add controller");
}]);
