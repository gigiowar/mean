angular.module("mean").controller("OrdersController",function($scope){

	$scope.pedidos = [
		{
			"_id": 1,
			"nome": "Teste teste",
			"sku": "123456",
			"imagem": "/img/fallout4.jpg"
		},
		{
			"_id": 2,
			"nome": "Teste teste",
			"sku": "789012",
			"imagem": "/img/mortal-kombat.jpg"
		},
		{
			"_id": 3,
			"nome": "Teste teste",
			"sku": "345678",
			"imagem": "/img/starwars.jpg"
		}			
	];


});