var weightApp = angular.module("weightApp");

weightApp.controller("addController", ['$scope', '$log', function ($scope, $log) {
    $log.debug("start add controller");
    var dataList = angular.fromJson(window.localStorage["weightList"]) || []; 
    
    $scope.save = function () {
        // here, $scope is parent scope
        // "this" object is the current child scope
        var member = this.member;
        var weight = this.weight;
        var date = this.date;
        var data = {
            member: member,
            weight: weight,
            date: date
        }
        dataList.push(data);
        window.localStorage["weightList"] = angular.toJson(dataList);
        alert("save successfully");
    }
}]);
