import { legacy_createStore } from "redux";
import BibliothequeReducers from "./reducers";

export const BibliothequeStore = legacy_createStore(BibliothequeReducers);