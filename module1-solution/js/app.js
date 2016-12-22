(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.textbox = "";
  $scope.placeholder = "";
  $scope.alert = false;
  $scope.alertStatus = "";
  $scope.validationStatus = "";

  $scope.checkItems = function () {
  	var items = $scope.textbox.split(",");
	$scope.placeholder = getMsg(items);
  };

  function getMsg(items) {
  	var msg = "";

  	if ($scope.textbox === "") {
  		msg = "Please enter data first!";
		$scope.alert = true;
		$scope.alertStatus = "alert-danger";
  		$scope.validationStatus = "has-error";
  	}
  	else if (items.length < 4)  {
  		msg = "Enjoy!";
		$scope.alertStatus = "alert-success";
  		$scope.validationStatus = "has-success";
  	}
  	else {
  		msg = "Too much!";
		$scope.alertStatus = "alert-success";
 		$scope.validationStatus = "has-success";
  	}

  	return msg;
  }

}

})();
