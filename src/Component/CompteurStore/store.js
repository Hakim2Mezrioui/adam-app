import { legacy_createStore } from "redux";
import { reducersCpt } from "./reducers";

export const store = legacy_createStore(reducersCpt); 