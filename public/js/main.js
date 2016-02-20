angular.module("mean",["ngRoute"]).config(function($routeProvider) {

	$routeProvider.when("/users",{
		templateUrl: "partials/users.html",
		controller: "UsersController"
	});

	$routeProvider.when("/user/:userId",{
		templateUrl: "partials/user.html",
		controller: "UserController"
	});

	// $routeProvider.when("/adresses",{
	// 	templateUrl: "partials/adresses.html",
	// 	controller: "AdressesController"
	// });

	// $routeProvider.when("/adresses/:adressId",{
	// 	templateUrl: "partials/adress.html",
	// 	controller: "AdressController"
	// });

	// $routeProvider.when("/orderers",{
	// 	templateUrl: "partials/orderers.html",
	// 	controller: "OrderersController"
	// });	


	// $routeProvider.when("/order/:orderId",{
	// 	templateUrl: "partials/order.html",
	// 	controller: "OrderController"
	// });	

});