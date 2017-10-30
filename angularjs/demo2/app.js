'use strict';

var demo2App = angular.module('demo2App', ['ngRoute', 'ngResource']);

demo2App.config(function($routeProvider){
    
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    .when('/forecast/:days', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    
})

demo2App.controller('mainController', ['$scope',
function($scope){
    $scope.title = '';
}]);

demo2App.controller('homeController', ['$scope', '$http', 'weatherService', 'userService', function($scope, $http, weatherService, userService){
    $scope.city='';
    $scope.click = function(){
        console.log('weather service: ' + weatherService.getForecast($scope.city)) ;
    }
   userService.getUsers(function(users){ 
           $scope.users =  users; 
   });
    
    $http.get('http://localhost:44912/users')
    .then(function(response){
        $scope.users2 = response.data;
    }, function(response){
        console.log(response);
    })
}]);

demo2App.controller('forecastController', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.title = 'title....';
    $scope.days = $routeParams.days;
}]);

demo2App.directive('user-item', function(){
    return {
        restrict: 'E',
        templateUrl: 'directives/user-item.html',
        replace: true,
        scope: {
            user: "="
        }
    }
});

demo2App.directive('directive-demo', function(){
    return {
        restrict: 'E',
        templateUrl: 'directives/directive-demo.html',
        replace: true,
        scope: {}
    }
});

demo2App.directive("w3TestDirective", function() {
    return {
        template : "<h1>Made by a directive!</h1>"
    };
});