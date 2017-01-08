(function (argument) {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

	// Redirect to home page if no other URL matches
	$urlRouterProvider.otherwise('/');

	// *** Set up UI states ***
	$stateProvider

		// Home page
		.state('home', {
			url: '/',
			templateUrl: 'src/menuapp/templates/home.template.html'
		})

		// Categories list page
		.state('categories', {
			url: '/categories',
			templateUrl: 'src/menuapp/templates/categories.template.html',
			controller: 'CategoriesController as categoriesList'
		})

		// Items list page
		.state('items', {
			url: '/items',
			templateUrl: 'src/menuapp/templates/items.template.html',
			controller: 'ItemsController as itemsList'
		});

}

})();
