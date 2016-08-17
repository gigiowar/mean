angular.module("mean",["ngRoute","ngResource"])
	.config(function($routeProvider) {

	$routeProvider.when("/users",{
		templateUrl: "partials/users.html",
		controller: "UsersController"
	});

	$routeProvider.when("/user/:userId",{
		templateUrl: "partials/user.html",
		controller: "UserController"
	});

	$routeProvider.when("/user",{
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

	$routeProvider.when("/orders",{
		templateUrl: "partials/orders.html",
		controller: "OrdersController"
	});	


	$routeProvider.when("/order/:orderId",{
		templateUrl: "partials/order.html",
		controller: "OrderController"
	});	

	$routeProvider.when("/order",{
		templateUrl: "partials/order.html",
		controller: "OrderController"
	});

	$routeProvider.otherwise({redirectTo: '/users'});

});