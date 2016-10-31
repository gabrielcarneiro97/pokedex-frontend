/**
 * Configuração das rotas
 */
app.config(function($routeProvider) {
$routeProvider.when('/:page',
      {
        templateUrl: 'templates/main.html',
        controller: "mainController",
        controllerAs: "ctrl"
      }
    )
    .when('/adm',
      {
        templateUrl: 'templates/adm.html',
        controller: "admController",
        controllerAs: "ctrl"
      }
    )
    .when('/pokemon/:id',
      {
        templateUrl: 'templates/pokemon.html',
        controller: "pokemonController",
        controllerAs: "ctrl"
      }
    )
    .otherwise({redirectTo: '/0'});
});