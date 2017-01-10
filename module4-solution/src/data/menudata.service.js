(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
 	var menuData = this;

	menuData.getAllCategories = function() {
		return $http ({
			url: 'https://davids-restaurant.herokuapp.com/categories.json'
		})
		.then(function (response) {
			return response.data;
		})
	};

	menuData.getItemsForCategory = function(categoryShortName) {
		return $http ({
			url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName)
		})
		.then(function (response) {
			return response.data.menu_items;
		})
	};
}

})();
