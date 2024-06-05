import { legacy_createStore } from "redux";
import { reducers } from "./reducers";

export const store = legacy_createStore(reducers);