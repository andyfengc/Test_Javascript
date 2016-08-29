var getStories = function(){
    var stories = angular.fromJson(window.localStorage["readStoryIds"]) || [];
    return stories;
}

var saveStories = function(){
    
}

var getSettings = function(){
    var settings = angular.fromJson(window.localStorage["settings"]);
    return settings;
}

var saveSettings = function(){

}