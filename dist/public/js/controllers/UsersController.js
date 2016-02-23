angular.module("mean").controller("UsersController",function(User, $scope){

	$scope.users = [];		

	$scope.mensagem = {texto:""};

	function buscaUsers(){
		User.query(
			function(users){
				$scope.users = users;
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
	buscaUsers();

	$scope.remove = function(user){
		User.delete({id: user._id},
			buscaUsers,
			function(erro){
				console.log(erro);
				$scope.mensagem = {
					texto:"Não foi possível remover o contato"
				};
			}
		);
	};

});