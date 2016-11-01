function populate(){
	for (var i = 1; i <= 151; i++) {
		$.ajax({
			method: "GET",
			url:`http://pokeapi.co/api/v2/pokemon/${i}/`,
			success(data){

				let pokemon = {};

				pokemon.nome = data.name;

				pokemon.peso = data.weight;
				pokemon.altura = data.height;

				pokemon.defensa = data.stats[3].base_stat;
				pokemon.ataque = data.stats[4].base_stat;
				pokemon.hp = data.stats[5].base_stat;

				if(i < 10)
					pokemon.img = "http://assets.pokemon.com/assets/cms2/img/pokedex/full/00{{poke.id}}.png"
				else if (i < 100)
					pokemon.img = "http://assets.pokemon.com/assets/cms2/img/pokedex/full/0{{poke.id}}.png"
				else
					pokemon.img = "http://assets.pokemon.com/assets/cms2/img/pokedex/full/{{poke.id}}.png"


				let tipos = [];

				for (var j = 0; j < data.types.length; j++){
					tipos[j] = {};
					tipos[j].id = i;
					tipos[j].nome = data.types[j].type.name;
				} 



				let golpes = [];

				for (var j = 0; j < data.abilities.length; j++){
					golpes[j] = {};
					goples[j].id = i;
					golpes[j].nome = data.abilities[j].ability.name;
				}


				console.log(pokemon);

				//postPoke(pokemon);

				for (var j = 0; j < golpes.length; j++) 
					//postGolpe(golpes[j]);
					
				for (var j = 0; j < tipos.length; j++)
					//relacTipo(tipo);

			}
		});



	}
}

function postPoke(pokemon){
	$.ajax({
		method: "POST",
		traditional: true,
		contentType: "application/json: charset=tuf-8",
		data: JSON.stringify(pokemon),
		url: ""
	});
}

function postGolpe(golpe){
	$.ajax({
		method: "POST",
		traditional: true,
		contentType: "application/json: charset=tuf-8",
		data: JSON.stringify(golpe),
		url: ""
	});
}

function relacTipo(tipo){
	$.ajax({
		method: "POST",
		traditional: true,
		contentType: "application/json: charset=tuf-8",
		data: JSON.stringify(tipo),
		url: ""
	});
}