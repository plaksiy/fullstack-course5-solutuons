(function () {
'use strict';

angular.module('MenuData')
.service('MenuDataService', MenuDataService);

MenuDataService .$inject = ['$http', 'categoryShortName']
function MenuDataService($http, categoryShortName) {
	var menuData = this;

	menuData.getAllCategories = function() {
// https://davids-restaurant.herokuapp.com/categories.json
	};

	menuData.getItemsForCategory = function(categoryShortName) {
// https://davids-restaurant.herokuapp.com/menu_items.json?category=
	};

}

})();