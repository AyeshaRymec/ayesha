// app.js

var app = angular.module("app", []);

app.controller("emp", function($scope) {

  // Inputs 
  $scope.num1 = null;
  $scope.num2 = null;

  // Output
  $scope.sum = null;

  // Text input for ng-disabled
  $scope.textInput = "";

  $scope.sumThem = function() {
    $scope.sum = parseInt($scope.num1) + parseInt($scope.num2);
  }

  // Sample data
  $scope.fruits = [
    "Apple", 
    "Banana", 
    "Mango",
    "Orange",
    "Strawberry"
  ];

});