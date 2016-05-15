'use strict';

var myApp = angular.module('myApp', [])
	.controller("mainController", function($scope){
		$scope.myModel = [1234, 1263];
	})
	.directive("dynamicInput", function(){
	    return {
	        restrict: "A",
	        transclude: true,
	        scope: {
	            inputName: '@',
	            inputModel: '=ngModel',
	        },
	        templateUrl: 'templates/inputfield.html',
	        link: function($scope, elem, attrs) {
	            if($scope.inputModel.length == 0){
	                $scope.inputModel.length = 1;
	            }
	            $scope.removeField = function(index){
	                $scope.inputModel.splice(index, 1);
	            };
	            $scope.addField = function(){
	                $scope.inputModel.length++;
	                console.log($scope.inputModel);
	            };
	        }
	    };
	});
