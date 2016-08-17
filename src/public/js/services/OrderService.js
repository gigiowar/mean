angular.module("mean").factory("Order",function($resource){

	return $resource("/orders/:id");

});