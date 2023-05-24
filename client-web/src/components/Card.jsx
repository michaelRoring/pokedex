// import effect, state
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ pokemon }) {
  //   declaration;

  const [pokemonData, setPokemonData] = useState();

  async function fetchPokemon() {
    try {
      const res = await fetch(pokemon.url);

      if (!res.ok) throw await res.text();

      const response = await res.json();
      //   console.log("response :", response);

      setPokemonData(response);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  //   console.log("pokemonData :", pokemonData);

  function capitalizeFirstWord(sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }

  function getTypeBackgroundColor(type) {
    switch (type) {
      case "grass":
        // return "bg-green-500 ";
        return "bg-teal-300";
      case "fire":
        return "bg-red-500 ";
      case "water":
        return "bg-blue-100";
      default:
        return "bg-gray-100";
    }
  }

  function getTypeButtonColor(type) {
    switch (type) {
      case "grass":
        return "bg-teal-500 ";
      case "fire":
        return "bg-red-700 ";
      case "water":
        return "bg-blue-700";
      default:
        return "bg-gray-300";
    }
  }

  return (
    <>
      <div className=" m-6 max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <div
          className={`h-48 rounded-3xl rounded-br-none ${getTypeBackgroundColor(
            pokemonData?.types[0]?.type?.name
          )}  border border-slate`}
        >
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5 grid grid-cols-2">
            <div>
              <a href="#">
                <h5 className="mb-4 text-4xl text-white font-bold tracking-tight text-yellow-50 dark:text-white">
                  {capitalizeFirstWord(pokemon?.name)}
                </h5>
              </a>
              <p className="mb-3 font-normal text-white dark:text-gray-400">
                {pokemonData?.types.map(type => {
                  return (
                    <div className="text-white-100">{type?.type?.name}</div>
                  );
                })}
              </p>
              <a
                href="#"
                className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${getTypeButtonColor(
                  pokemonData?.types[0]?.type?.name
                )} `}
              >
                View Detail
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div>
              <img
                src={pokemonData?.sprites?.other?.dream_world?.front_default}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
