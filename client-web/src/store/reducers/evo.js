const initialState = {
  evo: null,
};

const evolutionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchEvoSuccess":
      return {
        ...state,
        evo: action.payload,
      };
    default:
      return state;
  }
};

export default evolutionReducer;
