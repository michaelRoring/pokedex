// import effect, state
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../store/action/actionCreator";
import Card from "../components/Card";

function Home() {
  // declaration
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  const pokemons = useSelector(state => {
    return state.pokemonReducer.pokemons;
  });
  // console.log("pokemons :", pokemons);

  return (
    <>
      {/* <h1>Top List Pokemon</h1> */}
      <h1 className="mb-4 pl-24 ml-8 pt-12 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
        Pokemon List
      </h1>
      <div className="grid grid-cols-3 mx-24">
        {pokemons?.results?.map(pokemon => {
          return <Card key={pokemon.name} pokemon={pokemon} />;
        })}
      </div>
    </>
  );
}

export default Home;
