import { useParams, Link } from "react-router-dom";
import {
  getTypeBackgroundColor,
  capitalizeFirstWord,
  getTypeButtonColor,
} from "../function";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchDetailPokemon,
  fetchEvolution,
} from "../store/action/actionCreator";

function Detail() {
  // declaration
  const { id } = useParams();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = tabIndex => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    dispatch(fetchDetailPokemon(id));
  }, []);

  const pokemonData = useSelector(state => {
    return state?.detailReducer?.detail;
  });

  useEffect(() => {
    dispatch(fetchEvolution(id));
  }, []);

  const evolution = useSelector(state => {
    return state?.evolutionReducer?.evo;
  });

  function padWithZeros(number) {
    const paddedNumber = number.toString().padStart(4, "0");
    return paddedNumber;
  }
  console.log("pokemonData :", pokemonData);
  console.log("evolution :", evolution);
  return (
    <>
      {pokemonData && (
        <div
          className={`h-screen rounded-t-full ${getTypeBackgroundColor(
            pokemonData?.types[0]?.type?.name
          )} text-center drop-shadow-2xl border`}
        >
          <div className="">
            {/* <img src="https://raw.githubusercontent.com/gist/Galadirith/baaf38c7286b568973cc50a50ff57f4d/raw/34d60cae491bc505c212398b94f12705665c12fc/pokeball.svg" /> */}
            <img
              src={pokemonData?.sprites?.other?.dream_world?.front_default}
              className="mx-auto drop-shadow-2xl"
            />
          </div>
          <div className="grid grid-cols-2">
            <div className="mb-3 text-white dark:text-gray-400">
              {pokemonData?.types.map(type => {
                return (
                  <div
                    className={`${getTypeButtonColor(
                      pokemonData?.types[0]?.type?.name
                    )} rounded-xl mb-2 w-24 ml-96 drop-shadow-2xl`}
                  >
                    <div className="text-yellow-50 text-xl text-left pl-5">
                      {type?.type?.name}
                    </div>
                  </div>
                );
              })}
            </div>
            <h5 className="drop-shadow-xl text-3xl text-right pr-96 pt-8 text-white font-bold tracking-tight text-yellow-50 dark:text-white">
              #{padWithZeros(pokemonData?.id)}
            </h5>
          </div>
          <h5 className="drop-shadow-2xl mb-4 text-8xl text-white font-bold tracking-tight text-yellow-50 dark:text-white">
            {capitalizeFirstWord(pokemonData?.name)}
          </h5>

          <div className="bg-white mx-96 w-98 rounded-2xl  ">
            <nav class="flex space-x-2 " aria-label="Tabs" role="tablist">
              <button
                type="button"
                class={`hs-tab-active:bg-gray-200 hs-tab-active:text-gray-800 hs-tab-active:hover:text-gray-800 dark:hs-tab-active:bg-gray-700 dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 dark:hover:text-gray-400 active ${
                  activeTab === 1
                    ? "text-gray-500 rounded-t-lg hover:text-gray-700 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 active"
                    : "text-gray-900 dark:text-gray-300 dark:hover:text-gray-200"
                }`}
                id="pills-on-gray-color-item-1"
                data-hs-tab="#pills-on-gray-color-1"
                aria-controls="pills-on-gray-color-1"
                role="tab"
                onClick={() => handleTabClick(1)}
                aria-selected={activeTab === 1}
              >
                About
              </button>
              <button
                type="button"
                class="hs-tab-active:bg-gray-200 hs-tab-active:text-gray-800 hs-tab-active:hover:text-gray-800 dark:hs-tab-active:bg-gray-700 dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 dark:hover:text-gray-400 dark:hover:text-gray-300"
                id="pills-on-gray-color-item-2"
                data-hs-tab="#pills-on-gray-color-2"
                aria-controls="pills-on-gray-color-2"
                role="tab"
                onClick={() => handleTabClick(2)}
                aria-selected={activeTab === 2}
              >
                Base Stats
              </button>
              <button
                type="button"
                class="hs-tab-active:bg-gray-200 hs-tab-active:text-gray-800 hs-tab-active:hover:text-gray-800 dark:hs-tab-active:bg-gray-700 dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 dark:hover:text-gray-400 dark:hover:text-gray-300"
                id="pills-on-gray-color-item-3"
                data-hs-tab="#pills-on-gray-color-3"
                aria-controls="pills-on-gray-color-3"
                role="tab"
                onClick={() => handleTabClick(3)}
                aria-selected={activeTab === 3}
              >
                Evolution
              </button>
              <button
                type="button"
                class="hs-tab-active:bg-gray-200 hs-tab-active:text-gray-800 hs-tab-active:hover:text-gray-800 dark:hs-tab-active:bg-gray-700 dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 dark:hover:text-gray-400 dark:hover:text-gray-300"
                id="pills-on-gray-color-item-3"
                data-hs-tab="#pills-on-gray-color-3"
                aria-controls="pills-on-gray-color-3"
                role="tab"
                onClick={() => handleTabClick(4)}
                aria-selected={activeTab === 4}
              >
                Moves
              </button>
            </nav>

            <div class="mt-3">
              <div
                id="pills-on-gray-color-1"
                role="tabpanel"
                aria-labelledby="pills-on-gray-color-item-1"
                className={activeTab === 1 ? "" : "hidden"}
              >
                <div className="grid grid-cols-2">
                  <div>
                    <h1 className="mb-4 text-slate-400 text-left ml-28">
                      Species
                    </h1>
                    <h1 className="mb-4 text-slate-400 text-left ml-28">
                      Height
                    </h1>
                    <h1 className="mb-4 text-slate-400 text-left ml-28">
                      Weight
                    </h1>
                    <h1 className="mb-4 text-slate-400 text-left ml-28">
                      Abilities
                    </h1>
                  </div>
                  <div className="w-96">
                    <h1 className="mb-4 pr-48 text-slate-700 text-left">
                      {capitalizeFirstWord(pokemonData?.species?.name)}
                    </h1>
                    <h1 className="mb-4 pr-48 text-slate-700 text-left">
                      {pokemonData?.height} cm
                    </h1>
                    <h1 className="mb-4 pr-48 text-slate-700 text-left">
                      {pokemonData?.weight / 10} kg
                    </h1>

                    <h1 className="mb-4 pr-48 text-slate-700 text-left">
                      {pokemonData?.abilities?.map(ability => {
                        return (
                          <h1>{capitalizeFirstWord(ability?.ability?.name)}</h1>
                        );
                      })}
                    </h1>
                  </div>
                </div>
              </div>
              <div
                id="pills-on-gray-color-2"
                class="hidden"
                role="tabpanel"
                aria-labelledby="pills-on-gray-color-item-2"
                className={activeTab === 2 ? "" : "hidden"}
              >
                <div className="grid grid-cols-3">
                  {/* first column */}
                  <div>
                    <h1 className="mb-4 text-slate-400 text-left ml-28">HP</h1>
                    <h1 className="mb-4 text-slate-400 text-left ml-28">
                      Attack
                    </h1>
                    <h1 className="mb-4 text-slate-400 text-left ml-28">
                      Defense
                    </h1>
                    <h1 className="mb-4 text-slate-400 text-left ml-28">
                      Sp. Atk
                    </h1>
                    <h1 className="mb-4 text-slate-400 text-left ml-28">
                      Sp. Def
                    </h1>
                  </div>
                  {/* second column */}
                  <div>
                    <h1 className="mb-4 pl-12 ml-8 text-slate-700 text-left">
                      {pokemonData?.stats[0]?.base_stat}
                    </h1>

                    <h1 className="mb-4 pl-12 ml-8  text-slate-700 text-left">
                      {pokemonData?.stats[1]?.base_stat}
                    </h1>
                    <h1 className="mb-4 pl-12 ml-8  text-slate-700 text-left">
                      {pokemonData?.stats[2]?.base_stat}
                    </h1>
                    <h1 className="mb-4 pl-12 ml-8  text-slate-700 text-left">
                      {pokemonData?.stats[3]?.base_stat}
                    </h1>
                    <h1 className="mb-4 pl-12 ml-8  text-slate-700 text-left">
                      {pokemonData?.stats[4]?.base_stat}
                    </h1>
                  </div>
                  {/* third column */}
                  <div>
                    <div class="mt-2 w-2/3 mb-8 mr-24 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className={
                          pokemonData?.stats[0]?.base_stat >= 50
                            ? "bg-green-600 h-2.5 rounded-full"
                            : "bg-red-600 h-2.5 rounded-full"
                        }
                        style={{
                          width: `${pokemonData?.stats[0]?.base_stat}%`,
                        }}
                      ></div>
                    </div>
                    <div class="mt-2 w-2/3 mb-8 mr-24 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className={
                          pokemonData?.stats[1]?.base_stat >= 50
                            ? "bg-green-600 h-2.5 rounded-full"
                            : "bg-red-600 h-2.5 rounded-full"
                        }
                        style={{
                          width: `${pokemonData?.stats[1]?.base_stat}%`,
                        }}
                      ></div>
                    </div>
                    <div class="mt-2 w-2/3 mb-8 mr-24 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className={
                          pokemonData?.stats[2]?.base_stat >= 50
                            ? "bg-green-600 h-2.5 rounded-full"
                            : "bg-red-600 h-2.5 rounded-full"
                        }
                        style={{
                          width: `${pokemonData?.stats[2]?.base_stat}%`,
                        }}
                      ></div>
                    </div>
                    <div class="mt-2 w-2/3 mb-8 mr-24 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className={
                          pokemonData?.stats[3]?.base_stat >= 50
                            ? "bg-green-600 h-2.5 rounded-full"
                            : "bg-red-600 h-2.5 rounded-full"
                        }
                        style={{
                          width: `${pokemonData?.stats[3]?.base_stat}%`,
                        }}
                      ></div>
                    </div>
                    <div class="mt-2 w-2/3 mb-8 mr-24 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className={
                          pokemonData?.stats[4]?.base_stat >= 50
                            ? "bg-green-600 h-2.5 rounded-full"
                            : "bg-red-600 h-2.5 rounded-full"
                        }
                        style={{
                          width: `${pokemonData?.stats[4]?.base_stat}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="pills-on-gray-color-3"
                class="hidden"
                role="tabpanel"
                aria-labelledby="pills-on-gray-color-item-3"
                className={activeTab === 3 ? "" : "hidden"}
              >
                <p class="text-gray-500 dark:text-gray-400">
                  Evolution to{" "}
                  <em className="font-bold">
                    {evolution?.chain?.evolves_to[0]?.species?.name}
                  </em>
                </p>
              </div>
              <div
                id="pills-on-gray-color-4"
                class="hidden"
                role="tabpanel"
                aria-labelledby="pills-on-gray-color-item-4"
                className={activeTab === 4 ? "" : "hidden"}
              >
                <h1 className="mb-8 text-slate-800 text-center text-2xl">
                  {capitalizeFirstWord(pokemonData?.species?.name)}'s moves
                </h1>
                <div className="grid grid-cols-3 text-left ml-12 text-slate-500">
                  {pokemonData?.moves.map(move => {
                    return <p>{move?.move?.name}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
