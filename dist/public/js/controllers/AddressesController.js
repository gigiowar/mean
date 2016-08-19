angular.module("mean").controller("AddressesController",function(Order, $scope){

	$scope.addresses = [];		

	$scope.mensagem = {texto:""};

	function buscaAddress(){
		Order.query(
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
		Order.delete({id: address._id},
			buscaAddress,
			function(erro){
				console.log(erro);
				$scope.mensagem = {
					texto:"Não foi possível remover o contato"
				};
			}
		);
	};

});