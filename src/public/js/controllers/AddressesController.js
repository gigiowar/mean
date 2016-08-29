angular.module("mean").controller("AddressesController",function(Address, $scope){

	$scope.addresses = [];		

	$scope.mensagem = {texto:""};

	function buscaAddress(){
		Address.query(
			function(addresses){
				$scope.addresses = addresses;
				$scope.mensagem = {};
			},
			function(erro){
				console.log(erro);
				$scope.mensagem = {
					texto:"Não foi possível obter a lista"
				};
				
			}
		);

	}
	buscaAddress();

	$scope.remove = function(address){
		Address.delete({id: address._id},
			buscaAddress,
			function(erro){
				console.log(erro);
				$scope.mensagem = {
					texto:"Não foi possível remover o endereco"
				};
			}
		);
	};

});