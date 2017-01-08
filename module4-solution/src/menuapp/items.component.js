(function () {
'use strict';

angular.module('MenuApp')
.component('Items', {
	templateUrl: 'src/menuapp/templates/items.templates.html',
	controller: ItemsController,
	bindings: {
		items: '<'
	}
});

})();
