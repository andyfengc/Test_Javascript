var weatherApp = angular.module("weatherApp", ['ngRoute', 'ngMessages', 'ngResource']);

weatherApp.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: 'pages/home.html',
			controller: 'homeController'
		})
		.when("/forecast", {
			templateUrl: 'pages/forecast.html',
			controller: 'forecastController'
		})
		.when('/facebook', {
		templateUrl: 'pages/facebook.html',
		controller: 'facebookController'
	})
});

weatherApp.controller('homeController', ['$scope', '$log', 'shareService', function ($scope, $log, shareService) {
	$scope.$watch('city', function(){
		shareService.city = $scope.city;
	})
}])

.controller('forecastController', ['$scope', '$log', 'shareService', function ($scope, $log, shareService) {
	$log.info("forecast input: " + shareService.city);
	 $scope.city = shareService.city;
}])

.controller('facebookController', ['$scope', '$log', 'facebookService', function ($scope, $log, facebookService) {
	$scope.getGraph = function() {
      $scope.result = GraphFacebook.getJSONP($scope.graph);
    };
}])

.service('shareService', function(){
	
})

.factory('facebookService', ['$resource',
  function($resource) {
    return $resource('https://graph.facebook.com/:username', {}, {
      getJSONP: {
        method: 'JSONP',
        params: {
          callback: 'JSON_CALLBACK'
        }
      }
    });
  }
])


;