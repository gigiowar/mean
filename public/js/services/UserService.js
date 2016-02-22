angular.module("mean").factory("User",function($resource){

	return $resource("/users/:id");

});