$(function(){
    $('.selectpicker').selectpicker();
   $("#country").change(function(){
       var text = $("#country").find("option:selected").text();
       $("#result1").text(text);
   });
//    $("#color").selectpicker()
//    .change(function(e){
//        console.log("jquery select");
//        var text = $('.selectpicker option:selected').text();
//        console.log(text);
//    })
   $('.selectpicker').selectpicker('selectAll');
});

angular.module('selectApp', [])
.controller("selectController", ["$scope", function($scope){
    $scope.changeCountry = function(){
        var id = $("#country2").find("option:selected").val();
        var text = $("#country2").find("option:selected").text();
        console.log("jquery select: " + id + " " + text);
        console.log("angular select: " + $scope.country2);
    }
    //
    $scope.colors = ["White", "Black", "Blue", "Red", "Silver"];
    $scope.changeColor = function(){
        console.log("angular change");
        $scope.result3 = $scope.color;
        var text = $("#color").find("option:selected").text();
        console.log(text);
    }
}]);