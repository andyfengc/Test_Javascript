var creditApp = angular.module('creditApp');

creditApp.service('creditDao', function(){
    this.addCredit = function(){
        console.log('add credit');
    }    
})