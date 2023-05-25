const BASE_URL = "https://pokeapi.co/api/v2/";

export const fetchPokemons = () => {
  return async dispatch => {
    try {
      const res = await fetch(BASE_URL + "pokemon?limit=100&offset=0");

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

export const fetchDetailPokemon = id => {
  return async dispatch => {
    try {
      const res = await fetch(`${BASE_URL}pokemon/${id}/`);

      if (!res.ok) throw await res.text();

      const response = await res.json();
      //   console.log("response :", response);

      dispatch({
        type: "fetchDetailSuccess",
        payload: response,
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchEvolution = id => {
  return async dispatch => {
    try {
      const res = await fetch(`${BASE_URL}evolution-chain/${id}/`);

      if (!res.ok) throw await res.text();

      const response = await res.json();
      //   console.log("response :", response);

      dispatch({
        type: "fetchEvoSuccess",
        payload: response,
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  };
};

export const searchMonster = monsterName => {
  return async dispatch => {
    try {
      const res = await fetch(`${BASE_URL}pokemon/${monsterName}`);

      if (!res.ok) throw await res.text();

      const response = await res.json();
      console.log("response :", response);

      dispatch({
        type: "fetchDetailSuccess",
        payload: response,
      });
      return response;
    } catch (err) {
      console.log("err di action:", err);
    }
  };
};
