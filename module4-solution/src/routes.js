(function () {
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
			controller: 'CategoriesController as categoriesCtrl',
			resolve: {
				categories: ['MenuDataService', function (MenuDataService) {
					return MenuDataService.getAllCategories();
				}]
			}
		})

		// Items list page
		.state('items', {
			url: '/items/{categoryId}',
			templateUrl: 'src/menuapp/templates/items.template.html',
			controller: 'ItemsController as itemsCtrl',
			resolve: {
				items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
					return MenuDataService.getItemsForCategory($stateParams.categoryId);
				}]
			}
		});
}

})();
