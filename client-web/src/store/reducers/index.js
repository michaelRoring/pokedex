import { combineReducers } from "redux";
import pokemonReducer from "./pokemon";
import detailReducer from "./detail";
import evolutionReducer from "./evo";

export const rootReducer = combineReducers({
  //    reducers list
  pokemonReducer,
  detailReducer,
  evolutionReducer,
});
