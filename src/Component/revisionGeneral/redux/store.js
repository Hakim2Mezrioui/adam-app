import { legacy_createStore } from "redux";
import personReducers from "./reducers";

export const storePers = legacy_createStore(personReducers);
