function findPokemonName(pokemonId) {
    const matchingPokemon = pokeTeam.find(pokemon => pokemon.pokemon_id === pokemonId);
    if (matchingPokemon) {
        const matchingPokedexEntry = svpokedex.find(entry => entry.id === matchingPokemon.pokemon_id);
        if (matchingPokedexEntry) {
            return matchingPokedexEntry.name;
        }
    }
    return "Pokemon not found";
}