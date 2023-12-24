import { legacy_createStore } from "redux";
import { reducersCpt2 } from "./reducers";

export const store = legacy_createStore(reducersCpt2, window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__());
