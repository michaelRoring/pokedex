const BASE_URL = "https://pokeapi.co/api/v2/";

export const fetchPokemons = () => {
  return async dispatch => {
    try {
      const res = await fetch(BASE_URL + "pokemon?limit=5&offset=0");

      if (!res.ok) throw await res.text();

      const response = await res.json();

      dispatch({
        type: "fetchPokemonSuccess",
        payload: response,
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  };
};

export const cardPokemons = url => {
  return async dispatch => {
    try {
      const res = await fetch(url);

      if (!res.ok) throw await res.text();

      const response = await res.json();

      dispatch({
        type: "fetchDataPokemonSuccess",
        payload: response,
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  };
};
