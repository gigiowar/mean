angular.module("mean").controller("OrdersController",function($scope){

	$scope.total = 0;
	$scope.incrementa = function(){
		$scope.total++;
	};

	$scope.pedidos = [
		{
			"_id": 1,
			"_user_id":1,
			"sku": "123456",
			"quantidade": "01",
			"preco": "50",
			"imagem": "/img/fallout4.jpg"
		},
		{
			"_id": 2,
			"_user_id":1,
			"sku": "789012",
			"quantidade": "02",
			"preco": "100",
			"imagem": "/img/mortal-kombat.jpg"
		},
		{
			"_id": 3,
			"_user_id":2,
			"sku": "345678",
			"quantidade": "01",
			"preco": "150",
			"imagem": "/img/starwars.jpg"
		}			
	];

	$scope.filtro = "";


});