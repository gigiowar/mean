angular.module("mean").controller("OrdersController",function(Order, $scope){

	$scope.orders = [];		

	$scope.mensagem = {texto:""};

	function buscaOrders(){
		Order.query(
			function(orders){
				$scope.orders = orders;
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
	buscaOrders();

	$scope.remove = function(order){
		Order.delete({id: order._id},
			buscaOrders,
			function(erro){
				console.log(erro);
				$scope.mensagem = {
					texto:"Não foi possível remover o contato"
				};
			}
		);
	};

});