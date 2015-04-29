'use strict';

/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * # mytodoApp
 *
 * Main module of the application.
 */
angular
  .module('mytodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
	'appControllers'
  ])
  /* function that gets hrefs from html files and links next page to that specific object when clicked; also gives that spicifc page
  a controller to use.*/
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl',
      })
	  .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
	 .when('/mealSelect', {
        templateUrl: 'views/mealSelect.html',
        controller: 'MainCtrl'
      })
	  .when('/ingredSearch', {
        templateUrl: 'views/IngredSearch.html',
        controller: 'MainCtrl'
      })
	  .when('/mealSearch', {
        templateUrl: 'views/mealSearch.html',
        controller: 'MainCtrl'
      })
	  .when('/findRecipe', {
        templateUrl: 'views/findRecipe.html',
        controller: 'searchListCtrl'
      })
	  
	  .when('/logIn', {
        templateUrl: 'views/logIn.html',
        controller: 'MainCtrl'
      })
    .when('/dinner', {
        templateUrl: 'views/meal.html',
        controller: 'searchListCtrl',
		mealType: 'Dinner'
      })
	  .when('/lunch', {
        templateUrl: 'views/meal.html',
        controller: 'searchListCtrl',
		mealType: 'Lunch'
      })
	  .when('/snack', {
        templateUrl: 'views/meal.html',
        controller: 'searchListCtrl',
		mealType: 'Snack'
      })
	  .when('/breakfast', {
        templateUrl: 'views/meal.html',
        controller: 'searchListCtrl',
		mealType: 'Breakfast'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  

