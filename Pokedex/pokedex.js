// script.js
const contenedorPokedex = document.getElementById('pokedexContainer');
const apiUrl = 'https://pokeapi.co/api/v2/';

const tamannoGrupo = 6;

//obtiene todos los pokemons que existen
async function fetchTodosPokemons() {
    const allPokemon = [];

    let siguientePag = `${apiUrl}pokemon`;
    while (siguientePag) {
        const response = await fetch(siguientePag);
        const data = await response.json();
        allPokemon.push(...data.results);
        siguientePag = data.next;
    }

    return allPokemon;
}

//Obtener los detalles de los pokemons
async function fetchDetallesPokemons(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return {
            name: data.name,
            image: data.sprites.front_default,
            stats: data.stats,
        };
    } catch (error) {
        console.error('Error al obtener los datos del pokemon:', error);
    }
}

//Obtener grupo random de pokemons
function getGrupoRandom(pokemonData, tamannoGrupo) {
    const totalPokemon = pokemonData.length;
    const barajarDatos = pokemonData.sort(() => 0.5 - Math.random());
    const indexRandom = Math.floor(Math.random() * (totalPokemon - tamannoGrupo + 1));
    return barajarDatos.slice(indexRandom, indexRandom + tamannoGrupo);
}

//crear card de pokemon
function createPokemonCard(pokemon) {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    // Imagen
    const imagen = document.createElement('img');
    imagen.src = pokemon.image;
    imagen.alt = pokemon.name;
    pokemonCard.appendChild(imagen);

    // Nombre
    const nombre = document.createElement('h2');
    nombre.textContent = pokemon.name;
    pokemonCard.appendChild(nombre);

    // Estadísticas
    const listaStats = document.createElement('ul');
    pokemon.stats.forEach((stat) => {
        const statItem = document.createElement('li');
        statItem.textContent = `${stat.stat.name}: ${stat.base_stat}`;
        listaStats.appendChild(statItem);
    });
    pokemonCard.appendChild(listaStats);

    contenedorPokedex.appendChild(pokemonCard);
}

//muestra en pantalla un grupo de pokemones
async function displayGrupoRandomPokemon() {
    const allPokemon = await fetchTodosPokemons();
    const randomGroup = getGrupoRandom(allPokemon, tamannoGrupo);

    contenedorPokedex.innerHTML = '';
    randomGroup.forEach(async (pokemon) => {
        const detailedPokemon = await fetchDetallesPokemons(pokemon.url);
        createPokemonCard(detailedPokemon);
    });
}

// Mostrar un grupo inicial al cargar la página
displayGrupoRandomPokemon();
