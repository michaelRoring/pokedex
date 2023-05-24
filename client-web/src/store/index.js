import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./reducer";
import thunk from "redux-thunk";
// import applymiddleware
import { applyMiddleware } from "redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
