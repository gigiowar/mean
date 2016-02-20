angular.module("mean").controller("AddressesController",function($scope){

	$scope.total = 0;
	$scope.incrementa = function(){
		$scope.total++;
	};

	$scope.enderecos = [
		{
			"_id": 1,
			"endereco": "Rua Teste",
			"numero": "01",
			"cidade": "São Paulo",
			"estado": "SP"
		},
		{
			"_id": 2,
			"endereco": "Rua Teste 2",
			"numero": "02",
			"cidade": "São Paulo",
			"estado": "SP"
		},
		{
			"_id": 3,
			"endereco": "Rua Teste 3",
			"numero": "03",
			"cidade": "São Paulo",
			"estado": "SP"
		}			
	];

	$scope.filtro = "";


});