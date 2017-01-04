(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.controller('FoundItemsDirectiveController', FoundItemsDirectiveController)
.service('MenuSearchService', MenuSearchService)
.constant('baseUrl', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
	var ddo = {
		templateUrl: 'foundItems.html',
		scope: {
			items: '<',
			onRemove: '&'
		},
		controller: 'FoundItemsDirectiveController as list',
		bindToController: true
	};

	return ddo;
}

FoundItemsDirectiveController.$inject = ['MenuSearchService'];
function FoundItemsDirectiveController(MenuSearchService) {
	var list = this;
	list.errorMessage = "Nothing found";

	list.hasError = function () {
		return MenuSearchService.checkError();
	}
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
	var narrowCtrl = this;

	narrowCtrl.textbox = "";
	narrowCtrl.found = MenuSearchService.getItems();

	narrowCtrl.filter = function() {
	    if (MenuSearchService.checkSearchTerm(narrowCtrl.textbox)) {
	    	MenuSearchService.getMatchedMenuItems(narrowCtrl.textbox)
	    	.then(function (response) {
	  			MenuSearchService.setItems(response);
  				narrowCtrl.found = MenuSearchService.getItems();
	    	})
	    }
	};

    narrowCtrl.removeItem = function (index) {
    	MenuSearchService.removeItem(index);
    };
}

MenuSearchService.$inject = ['$http', 'baseUrl']
function MenuSearchService($http, baseUrl) {
	var service = this;
	var hasError = false;
	var found = [];

	service.checkError = function () {
		return hasError;
	};

	service.getItems = function () {
		return found;
	};

	service.setItems = function (items) {
 		found.length = 0;
		found = items;
		hasError = ! items.length;
	};

	service.removeItem = function (index) {
		found.splice(index, 1);
		hasError = ! found.length;
	};

	service.getMatchedMenuItems = function (searchTerm) {
	    return $http({
			url: (baseUrl + "/menu_items.json")
		}).then(
		function (result) {
		    var searchStr = searchTerm.toLowerCase();
		    var foundItems = [];

		    var menu_items = result.data.menu_items;

		    for (var i = 0; i < menu_items.length; i++) {
		    	var item =  menu_items[i];

		    	if (item.description.toLowerCase().indexOf(searchStr) !== -1) {
		    		foundItems.push(item);
		    	}
		    }

			service.hasError = ! foundItems.length;

		    return foundItems;
		});
	};

	service.checkSearchTerm = function (searchTerm){
		if (searchTerm === "") {
			hasError = true;
			found.length = 0;
			return false;
		} else {
			return true;
		}
	};

}
  
})();