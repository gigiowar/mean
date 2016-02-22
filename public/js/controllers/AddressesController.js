angular.module("mean").controller("AddressesController",function($scope){

	$scope.enderecos = [
		{
			"_id": 1,
			"nome":"Teste teste",
			"endereco": "Rua Teste",
			"numero": "01",
			"cidade": "São Paulo",
			"estado": "SP"
		},
		{
			"_id": 2,
			"nome":"Teste teste",
			"endereco": "Rua Teste 2",
			"numero": "02",
			"cidade": "São Paulo",
			"estado": "SP"
		},
		{
			"_id": 3,
			"nome":"Teste2 teste",
			"endereco": "Rua Teste 3",
			"numero": "03",
			"cidade": "São Paulo",
			"estado": "SP"
		}			
	];


});