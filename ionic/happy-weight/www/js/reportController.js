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

weightApp.controller("reportController", ['$scope', '$log', function ($scope, $log) {
    $log.debug("start report controller");

    // add data to the chart from user-defined directive
    $scope.chartOptions = {
        title: {
            text: 'Temperature data'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                    }]
    };

}]);
