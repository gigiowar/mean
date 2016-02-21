angular.module("mean").controller("UserController", 
	function($scope, $routeParams, $resource){
		
		var User = $resource("/users/:id");
		if($routeParams.userId){
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
			$scope.user = {};
		}			
	}
);