'use strict';
angular.module('app', ['app']);
var app = angular.module('app', []);
app.controller('MyCtrl', function($scope) {
    $scope.firstName = "Rahmad";
    $scope.lastName = "Firmansyah";
    $scope.gender = "";
    $scope.sekolah = "";
    $scope.seeFullName = function() {
        $scope.fullName = $scope.firstName + " " + $scope.lastName;
    };  

    $scope.seeGender = function(){
    	$scope.gender;
    };

    $scope.seeSekolah = function(){
    	$scope.sekolah;
    };
});