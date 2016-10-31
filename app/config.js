var app = angular.module('pokedex', ['ngRoute']);

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

app.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i=1; i<=total; i++) {
      input.push(i);
    }

    return input;
  };
});

var hostAddress = '';