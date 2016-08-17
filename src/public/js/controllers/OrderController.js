angular.module("mean").controller("OrderController", 
	function($scope, $routeParams, Order){
		
		Order.query(function(orders) {
			console.log("Chamou lista de pedidos");
			$scope.orders = orders;
		});

		if($routeParams.orderId){
			console.log('Passou parâmetro ' + $routeParams.orderId);
			Order.get({id: $routeParams.orderId},
				function(order) {
					$scope.order = order;
				},
				function(erro){
					$scope.mensagem = {
						texto: "Não foi possível obter o pedido"
					};
					console.log(erro);
				}
			);
		}
		else{
			console.log("Cria novo pedido");
			$scope.order = new Order();
		}

		$scope.salva = function() {
			
			$scope.order.$save()
			.then(function() {
				$scope.mensagem = {texto: 'Salvo com sucesso'};
				$scope.order = new Order();
			})
			.catch(function(erro) {
	  			$scope.mensagem = {texto: 'Não foi possível salvar'};
	  		});
		};					

	}
);