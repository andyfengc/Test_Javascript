var creditApp = angular.module("creditApp")

.controller('addRuleController', ['$scope', '$log', '$http', 'ruleDao', '$ionicHistory', '$state', function ($scope, $log, $http, ruleDao, $ionicHistory, $state) {
    $scope.rule = {};
    $scope.isEdit = false;
    $scope.addRule = function () {
            var rule = {
                'creditName': $scope.rule.creditName,
                'score': $scope.rule.score,
                'isIncome': $scope.rule.isIncome
            };
            ruleDao.addRule(rule, function () {
                $state.go('app.manageRule');
                $ionicHistory.clearCache();
            });
        }
        //    $scope.addRule = function(){
        //        $log.info("add rule " + $scope.rule.creditName + " " + $scope.rule.score + ' ' + $scope.rule.isIncome);
        //        $http.post('http://localhost:3000/rules', {
        //            'creditName' : $scope.rule.creditName,
        //            'score': $scope.rule.score,
        //            'isIncome' : $scope.rule.isIncome
        //        })
        //        .then(function(response){
        //            $log.info("saved rule successfully");
        //        }, function(response){
        //            $log.info('failed to save rule ' + response.data);
        //        });        
        //    };
}])

.controller("appController", ['$scope', '$log', function ($scope, $log) {
    $log.debug("start app controller");
}])

.controller('manageRuleController', ['$scope', '$log', '$state', '$window', 'ruleDao', '$ionicHistory', function ($scope, $log, $state, $window, ruleDao, $ionicHistory) {
    $log.debug('start manage controller');
    ruleDao.getRules(function (data) {
        $scope.rules = data;
    });

    $scope.deleteRule = function (rule) {
        ruleDao.deleteRule(rule, function () {
            $state.go('app.manageRule');
            //$window.location.reload(true);
            $ionicHistory.clearCache();
        });
    }
}])

.controller('editRuleController', ['$scope', '$log', '$state', '$window', 'ruleDao', '$state', '$location', '$ionicHistory', function ($scope, $log, $state, $window, ruleDao, $state, $location, $ionicHistory) {
    $log.debug('started get rule details controller');
    $scope.isEdit = true;
    var ruleId = $state.params.id;
    ruleDao.getRuleById(ruleId, function (data) {
        $scope.rule = data;
    });
    $scope.updateRule = function (rule) {
        ruleDao.updateRule(rule, function () {
            $state.go('app.manageRule');
            //$location.path('/app/rules/manage');
            //$window.location.reload(true);
            $ionicHistory.clearCache();
        });
    }

}]);

console.log('complete loading controllers');
