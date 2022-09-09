const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

const fetchPokemon = () => {
  const pokemonPromises = [];

  for (let i = 1; i <= 150; i++) {
    pokemonPromises.push(
      fetch(getPokemonUrl(i)).then((response) => response.json())
    );
  }

  Promise.all(pokemonPromises).then((pokemons) => {
    const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
      accumulator += `
                <div class="card">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}" class="icon">
                    <hr class="hr1">
                    <h2 class="card-txt">${pokemon.id}. ${pokemon.name}</h2>
                    <div class="btn-card">
                        <button class="btn-trash" onclick="abrirDel()">
                            <img src="images/Icon-trash.svg" alt="trash">
                            <p>Excluir</p>
                        </button>
                        <button class="btn-edit" onclick="abrirnOp()">
                            <img src="images/Icon-edit.svg" alt="edit">
                            <p>Editar</p>
                        </button>
                    </div> 
                </div> 
                `;
      return accumulator;
    }, "");

    const div = document.querySelector('[data-js="container"]');
    div.innerHTML = lisPokemons;
  });
};

fetchPokemon();
