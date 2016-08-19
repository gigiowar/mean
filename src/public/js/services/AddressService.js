angular.module("mean").factory("Address",function($resource){

	return $resource("/addresses/:id");

});