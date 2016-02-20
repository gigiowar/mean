angular.module("mean").controller("UsersController",function($scope){

	$scope.total = 0;
	$scope.incrementa = function(){
		$scope.total++;
	};

	$scope.clientes = [
		{
			"_id": 1,
			"nome": "Giovanni Abate",
			"email": "giovanni@empresa.com.br"
		},
		{
			"_id": 2,
			"nome": "Giovanni Abate 2",
			"email": "giovanni2@empresa.com.br"
		},
		{
			"_id": 3,
			"nome": "Giovanni Abate 3",
			"email": "giovanni3@empresa.com.br"
		}			
	];

	$scope.filtro = "";


});