(function (argument) {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
	
	.state('home', {
		url: '/',
		templateUrl: 'src/menuapp/templates/home.templates.html'
	})

	.state('categories', {
		url: '',
		templateUrl: ''
	})

	.state('items', {
		url: '',
		templateUrl: ''
	})
}

})();