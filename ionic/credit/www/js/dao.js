var getData = function(){
    var dataList = angular.fromJson(window.localStorage["growthData"]) || []; 
    return dataList;
}

var saveData = function(data){
    window.localStorage["growthData"] = angular.toJson(data);
}