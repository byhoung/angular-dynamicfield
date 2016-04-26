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
	        template: '<div class="input-group" ng-repeat="val in inputModel track by $index">' +
	                      '<input type="text" class="form-control" ng-model="inputModel[$index]" name="{{inputName}}"/>' +
	                      '<span class="input-group-btn"><button class="btn btn-danger" ng-click="removeField($index)" ng-disabled="inputModel.length == 1"><i class="glyphicon glyphicon-minus"></i></button></span>' +
	                  '</div>' +
	                  '<button class="btn btn-primary add-field" ng-click="addField()"><i class="glyphicon glyphicon-plus"></i></button>',
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
