var creditApp = angular.module("creditApp");

creditApp.controller('addRuleController', ['$scope', '$log', 'creditDao', function ($scope, $log, creditDao) {
    $scope.save = function () {
        creditDao.addCredit();
        alert('saved successfully');
    }
    $scope.test = function () {
        console.log('test');
    }
}]);


creditApp.controller("appController", ['$scope', '$log', function($scope, $log){
    $log.debug("start app controller");
}]);

//creditApp.controller('addRuleController', ['$scope', '$log',function ($scope, $log) {
//    console.log('sss');
//    $log.debug('start add controller');
//   
////    $scope.save = function () {
////        //creditDao.addCredit();
////        alert('saved successfully');
////    }
////    $scope.test = function () {
////        console.log('test');
////    }
//}]);

creditApp.controller('manageRuleController', ['$scope', '$log', '$state', '$window', function ($scope, $log, $state, $window) {
    $log.debug('start manage controller');
}]);
console.log('complete loading controllers');