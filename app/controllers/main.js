app.controller('mainController', ['$sce', '$scope', '$location', '$routeParams', function($sce, $scope, $location, $routeParams) {


	var ctrl = this;
	this.pokeArray = [];
	ctrl.page = $routeParams.page;
	if (ctrl.page >= 7) {
		ctrl.page = 7;
		ctrl.next = 0;
	}
	else {
		ctrl.next = parseInt(ctrl.page) + 1;
		if (ctrl.page == 0) {
			ctrl.prev = 7;
		}
		else
			ctrl.prev = parseInt(ctrl.page) - 1;
	}

	
	$.ajax({
		method: "GET",
		url: "http://pokeapi.co/api/v2/pokemon/?offset=" + ctrl.page *20,
		async: false,
		statusCode: {
			200:  function(data){
				for (var i = 0; i < data.results.length; i++) {

					let id = i+1 + 20*ctrl.page;

					if (id <= 151) {
						ctrl.pokeArray[i] = data.results[i];
						ctrl.pokeArray[i].name = ctrl.pokeArray[i].name.capitalizeFirstLetter();
						ctrl.pokeArray[i].id = id;
					}
					
				}
			}
		}
	});

}]);