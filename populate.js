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

				pokemon.tipos = [];

				for (var i = 0; i < data.types.length; i++) 
					pokemon.tipos[i] = data.types[i].type.name;



				pokemon.golpes = [];

				for (var i = 0; i < data.abilities.length; i++) 
					pokemon.golpes[i] = data.abilities[i].ability.name;



				console.log(pokemon);

				// $.ajax({});
			}
		});



	}
}

function put(pokemon){
	$.ajax({
		method: "PUT",
		dataType: "json",
		data: JSON.stringify(pokemon),
		url: ""
	});
}
