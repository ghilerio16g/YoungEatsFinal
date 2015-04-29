'use strict';
/* Controllers */

var appControllers = angular.module('appControllers', []);

appControllers.controller('searchListCtrl',['$scope','$http', '$route', '$window', function($scope, $http, $route, window) {
/* the search for meal function that gets the meal type value of the meal that is chosen in the meal select page and uses a google api to search the web
for anything that has to do with the value */ 
	$scope.searchForMeal = function() {
		$scope.mealType = $route.current.mealType;
		$http.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyDxjvEbmOoddLBdobekXJ6ovVETssMHJ-A&cx=008408434347638674339:jks6iv__hqo&q=' + $route.current.mealType).success(function(data) {
			$scope.results = data;
		});
	};
	/* The search by ingredient function that when one of the ingredients is clicked, adds it to the variable query. Then it uses the google api to search
		the web for any recipes that include the ingredients stored in the query variable.*/
	$scope.searchByIngred = function() {
		var query = '';
		if ($scope.dairy != undefined) {
			query += $scope.dairy + '+';
		}
		if ($scope.protein != undefined){
			query += $scope.protein + '+';
		}
		if ($scope.spices != undefined){
			query += $scope.spices + '+';
		}
		if ($scope.vegetables != undefined){
			query += $scope.vegetables + '+';
		}
		if ($scope.grains != undefined){
			query += $scope.grains;
		}		
		$http.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyDxjvEbmOoddLBdobekXJ6ovVETssMHJ-A&cx=008408434347638674339:jks6iv__hqo&q=' + query).success(function(data) {
			$scope.results = data;
		});
	};
	/* Searches the web for recipes based on what user enters into the search bar using a google api. */
	$scope.searchFor = function() {
		$http.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyDxjvEbmOoddLBdobekXJ6ovVETssMHJ-A&cx=008408434347638674339:jks6iv__hqo&q=' + $scope.searchText).success(function(data) {
			$scope.results = data;
			$scope.searchText = '';
		});
	};
}]);