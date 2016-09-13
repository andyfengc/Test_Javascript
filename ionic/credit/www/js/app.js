// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var creditApp = angular.module('creditApp', ['ionic']);

creditApp.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

creditApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app',{
            url:'/app',
            templateUrl: 'templates/test.html',
            controller: 'testController'
        })
    //        .state("app", {
    //            url: "/app",
    //            abstract: true,
    //            templateUrl: "templates/menu.html",
    //            controller: "appController"
    //        })
        .state("addRule", {
            url: "/rules/add",
            
            templateUrl: "templates/add.html",
            controller: "addRuleController"
          
    })
//        .state("rule.manage", {
//            url: "/rules/manage",
//            views: {
//                "menuContent": {
//                    templateUrl: "templates/rule.manage.html",
//                    controller: "manageRuleController"
//                }
//            }
//        });
$urlRouterProvider.otherwise('/rules/add');
});
