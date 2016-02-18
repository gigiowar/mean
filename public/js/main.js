angular.module("mean",["ngRoute"]).config(function($routeProvider) {

		$routeProvider.when("/clientes",{
			templateUrl: "partials/clientes.html",
			controller: "ClientesController"
		});

		$routeProvider.when("/cliente/:clienteId",{
			templateUrl: "partials/cliente.html",
			controller: "ClienteController"
		});


	});