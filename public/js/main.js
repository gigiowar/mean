angular.module("mean",["ngRoute"]).config(function($routeProvider) {

	$routeProvider.when("/users",{
		templateUrl: "partials/users.html",
		controller: "UsersController"
	});

	$routeProvider.when("/user/:userId",{
		templateUrl: "partials/user.html",
		controller: "UserController"
	});

	$routeProvider.when("/addresses",{
		templateUrl: "partials/addresses.html",
		controller: "AddressesController"
	});

	$routeProvider.when("/address/:addressId",{
		templateUrl: "partials/address.html",
		controller: "AddressController"
	});

	// $routeProvider.when("/orderers",{
	// 	templateUrl: "partials/orderers.html",
	// 	controller: "OrderersController"
	// });	


	// $routeProvider.when("/order/:orderId",{
	// 	templateUrl: "partials/order.html",
	// 	controller: "OrderController"
	// });	

});