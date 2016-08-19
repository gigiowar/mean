angular.module("mean").controller("AddressController", 
	function($scope, $routeParams, Address){
		
		Address.query(function(addresses) {
			console.log("Chamou lista de enderecos");
			$scope.addresses = addresses;
		});

		if($routeParams.addressId){
			console.log('Passou parâmetro ' + $routeParams.addressId);
			Address.get({id: $routeParams.addressId},
				function(address) {
					$scope.address = address;
				},
				function(erro){
					$scope.mensagem = {
						texto: "Não foi possível obter o endereco"
					};
					console.log(erro);
				}
			);
		}
		else{
			console.log("Cria novo endereco");
			$scope.address = new Address();
		}

		$scope.salva = function() {
			
			$scope.address.$save()
			.then(function() {
				$scope.mensagem = {texto: 'Salvo com sucesso'};
				$scope.address = new Address();
			})
			.catch(function(erro) {
	  			$scope.mensagem = {texto: 'Não foi possível salvar'};
	  		});
		};					

	}
);