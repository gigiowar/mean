angular.module("mean").controller("UserController", 
	function($scope, $routeParams, User){
		
		User.query(function(users) {
			console.log("Chamou lista de contatos");
			$scope.users = users;
		});

		if($routeParams.userId){
			console.log('Passou parâmetro ' + $routeParams.userId);
			User.get({id: $routeParams.userId},
				function(user) {
					$scope.user = user;
				},
				function(erro){
					$scope.mensagem = {
						texto: "Não foi possível obter o contato"
					};
					console.log(erro);
				}
			);
		}
		else{
			console.log("Cria novo contato");
			$scope.user = new User();
		}

		$scope.salva = function() {
			
			$scope.user.$save()
			.then(function() {
				$scope.mensagem = {texto: 'Salvo com sucesso'};
				$scope.user = new User();
			})
			.catch(function(erro) {
	  			$scope.mensagem = {texto: 'Não foi possível salvar'};
	  		});
		};					

	}



);