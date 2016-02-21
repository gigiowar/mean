angular.module("mean").controller("UsersController",function($scope, $resource){

	//$scope.users =[];

	$scope.users = [
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

	$scope.mensagem = {texto:""};

	$scope.filtro = "";
	
	var User = $resource("#/users/:id");

	function buscaUsers(){

		// User.query(
		// 	function(users){
		// 		$scope.users = users;
		// 	},
		// 	function(erro){
		// 		console.log(erro);
		// 		$scope.mensagem = {
		// 			texto:"Não foi possível obter a lista"
		// 		};
				
		// 	}
		// );

	}
	buscaUsers();

	// $scope.remove = function(user){
	// 	User.delete({id: user._id},
	// 		buscaUsers,
	// 		function(erro){
	// 			console.log(erro);
	// 			$scope.mensagem = {
	// 				texto:"Não foi possível remover o contato"
	// 			};
	// 		}
	// 	);
	// };

});