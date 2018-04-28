 var app = angular.module('myApp', []);
 app.controller('validateCtrl', function($scope) {
   $scope.emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   $scope.phoneNumberRegex = /^[2-9]{1}\d{2}[-]?\d{3}[-]?\d{4}$/;
   
   $scope.checkAddress = false;
   $scope.myFunc = function(){
     if($scope.checkAddress){
      $scope.user1 = $scope.user;
      $scope.email1 = $scope.email;
      $scope.zipCode1 = $scope.zipCode; 
     }else{
       $scope.user1 = "";
      $scope.email1 = "";
      $scope.zipCode1 = ""; 
     }
     
   }
   
   
  
 });