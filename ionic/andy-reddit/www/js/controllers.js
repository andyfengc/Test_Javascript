var redditApp = angular.module('redditApp');

redditApp.controller('redditController', ['$scope', '$http', function($scope, $http){
    $scope.stories = [];
    $http.get('https://www.reddit.com/r/technology/.json')
    .success(function(response){
        console.log(response);
        //$scope.stories = response.data.children;
        angular.forEach(response.data.children, function(child){
           $scope.stories.push(child.data); 
        })
        
    })
    .error(function (response){
        alert("failed to connect");
        console.log("failed to connect");
    });
    $scope.onHold = function(title){
        console.log("you pressed " + title);
    };
}])