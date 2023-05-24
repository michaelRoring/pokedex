const initialState = {
  pokemons: [],
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchPokemonSuccess":
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;