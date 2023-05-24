import { combineReducers } from "redux";
import pokemonReducer from "./pokemon";
import pokemonCardReducer from "./card";

export const rootReducer = combineReducers({
  //    reducers list
  pokemonReducer,
  pokemonCardReducer,
});
