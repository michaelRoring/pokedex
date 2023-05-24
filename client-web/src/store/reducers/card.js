const initialState = {
  data: [],
};

const pokemonCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchDataPokemonSuccess":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonCardReducer;
