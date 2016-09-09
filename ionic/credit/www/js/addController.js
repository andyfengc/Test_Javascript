var creditApp = angular.module("creditApp");

creditApp.controller("addRuleController", ['$scope', '$log', function ($scope, $log) {
    $log.debug("start add controller");
    var data = getData();
    
    $scope.save = function () {
        // here, $scope is parent scope
        // "this" object is the current child scope
        var member = this.member;
        var weight = this.weight;
        var date = this.date;
        var growth = {
            member: member,
            weight: weight,
            date: date
        };
        data.push(growth);
        saveData(data);
        
        alert("save successfully");
    }
}]);
