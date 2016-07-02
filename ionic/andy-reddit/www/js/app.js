(function () {
    var redditApp = angular.module('redditApp', ['ionic', 'angularMoment']);

    redditApp.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.cordova && cordova.InAppBrowser) {
                window.open = cordova.InAppBrowser.open;
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });

    redditApp.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('list', {
            url: '/list',
            templateUrl: 'views/list.html'
        });
        $stateProvider.state('settings', {
            url: '/settings',
            templateUrl: 'views/settings.html'
        });
        $stateProvider.state('test', {
            url: "/test",
            templateUrl: 'views/test.html'
        });
        $urlRouterProvider.otherwise('/list');
    });
})();
