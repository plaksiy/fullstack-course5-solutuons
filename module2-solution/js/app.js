(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.isEmpty = function () {
    return toBuy.items.length == 0;
  };

  toBuy.buyItem = function buyItem(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.items = ShoppingListCheckOffService.getBoughtItems();

  bought.isEmpty = function() {
    return bought.items.length == 0;
  };
};

function ShoppingListCheckOffService() {
  var service = this;
  var toBuyItems = [];
  var boughtItems = [];

  service.addItem = function (itemName, itemQuantity) {
    var item = {
      name: itemName,
      quantity: itemQuantity
    };
    toBuyItems.push(item);
  };

  service.buyItem = function (itemIndex) {
    var item = toBuyItems[itemIndex];
    toBuyItems.splice(item, 1);
    boughtItems.push(item);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  }

  init();

  function init () {
    for (var i = 0; i < 5; i++) {
      service.addItem("cookies", 10);
    };
  };

};


})();
