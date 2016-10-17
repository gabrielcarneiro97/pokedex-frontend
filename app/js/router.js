console.log("zzzzz");
/**
 * Configuração das rotas
 */
app.config(function($routeProvider) {
$routeProvider.when('/',
      {
        templateUrl: 'templates/main.html',
        controller: "mainController",
        controllerAs: "mainCtrl"
      }
    )
    .when('/adm',
      {
        templateUrl: 'templates/adm.html',
        controller: "admController",
        controllerAs: "admCtrl"
      }
    )
    .otherwise({redirectTo: '/'});
});