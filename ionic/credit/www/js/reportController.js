var weightApp = angular.module("weightApp");

// define chart directive
weightApp.directive("hcChart", function () {
    return {
        restrict: 'E',
        template: "<div><div>",
        scope: {
            options: "="
        },
        link: function (scope, elements) {
            Highcharts.chart(elements[0], scope.options);
        }
    }
});

weightApp.controller("reportController", ['$scope', '$log', '$filter', function ($scope, $log, $filter) {
    $log.debug("start report controller");
    var dates = [];
    var weights = [];
    
    function init(){
        var dataList = getData();
        var dataList = $filter('orderBy')(dataList, 'date');
        for (var key in dataList){
            var data = dataList[key];
            dates.push(data.date);
            weights.push(Number(data.weight));
        }
    }
    init();
    
    // add data to the chart from user-defined directive
    $scope.chartOptions = {
        title: {
            text: 'Daddy weight'
        },
        xAxis: {
            categories: dates
        },

        series: [{
            data: weights
        }]
    };

}]);
