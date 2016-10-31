app.controller('pokemonController', ['$sce', '$scope', '$location', '$routeParams', function($sce, $scope, $location, $routeParams) {

	var ctrl = this;
	ctrl.id = $routeParams.id;

	$scope.poke = {};
	$scope.evo = {};

	ctrl.evoId = null;
	ctrl.evoGet = null;


	$.ajax({
		method: "GET",
		url: `http://pokeapi.co/api/v2/pokemon/${ctrl.id}/`,
		async: false,
		success(data){
			$scope.poke.name = data.name;
			$scope.poke.name = $scope.poke.name.capitalizeFirstLetter();

			$scope.poke.defense = data.stats[3].base_stat;
			$scope.poke.attack = data.stats[4].base_stat;
			$scope.poke.hp = data.stats[5].base_stat;
			
			$scope.poke.defPerc = $scope.poke.defense * (10/13);
			$scope.poke.atkPerc = $scope.poke.attack * (10/13);
			$scope.poke.hpPerc = $scope.poke.hp * (10/13);

			$scope.poke.types = [];

			for (var i = 0; i < data.types.length; i++) {
				$scope.poke.types[i] = {};
				$scope.poke.types[i].name = data.types[i].type.name;
				$scope.poke.types[i].up = $scope.poke.types[i].name.toUpperCase();
			}

			$scope.poke.abilities = [];

			for (var i = 0; i < data.abilities.length; i++) {
				$scope.poke.abilities[i] = {};
				$scope.poke.abilities[i].name = data.abilities[i].ability.name;
				$scope.poke.abilities[i].up = $scope.poke.abilities[i].name.toUpperCase();

			}



		}
	});

	
	
}]);