var demo2App = angular.module('demo2App');

demo2App.service('weatherService', function(){
    this.getForecast = function(city){
        return 'forecast ... for ' + city;
    }
});

demo2App.service('userService', ['$http', function($http){
    this.getUsers = function(callback){
         var users = [];
        $http.get('https://jsonplaceholder.typicode.com/users').then(function(data){        
            users = data.data;
            callback(users);
    })
    }
}])