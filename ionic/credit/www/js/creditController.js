var creditApp = angular.module('creditApp');

creditApp.controller('addCreditController', ['$scope', '$log', 'ruleDao', 'creditDao', function ($scope, $log, ruleDao, creditDao) {
    $scope.credit = {};
    
    ruleDao.getRules(function(rules){
        $scope.rules = rules;
    })
    
    $scope.selectCredit = function(rule){
        $scope.credit.score = rule.score;
    }
}])
