(function () {
'use strict';

angular.module('MenuApp')
.component('Categories', {
	templateUrl: 'src/menuapp/templates/categories.templates.html',
	controller: CategoriesController,
	bindings: {
		categpries: '<'
	}
});

})();
