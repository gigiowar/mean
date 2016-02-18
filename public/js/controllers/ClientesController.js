angular.module("mean").controller("ClientesController",
	function($scope){

	$scope.total = 0;
	$scope.incrementa = function(){
		$scope.total++;
	};

});