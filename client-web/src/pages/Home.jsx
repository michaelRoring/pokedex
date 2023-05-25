// import effect, state
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../store/action/actionCreator";
import Card from "../components/Card";
import LoadingIcon from "../components/LoadingIcon";

function Home() {
  // declaration
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchPokemons())
      .then(() => {
        setIsLoading(false); // Update loading state after the cards are loaded
      })
      .catch(error => {
        console.log("Error fetching pokemons:", error);
        setIsLoading(false); // Update loading state in case of an error
      });
  }, []);

  const pokemons = useSelector(state => {
    return state.pokemonReducer.pokemons;
  });

  return (
    <>
      {/* <h1>Top List Pokemon</h1> */}
      <h1 className="mb-4 pl-24 ml-8 pt-12 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
        Pokemon List
      </h1>
      {isLoading ? (
        <LoadingIcon /> // Render loading icon while cards are being loaded
      ) : (
        <div className="grid grid-cols-3 mx-24">
          {pokemons?.results?.map(pokemon => (
            <Card key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
