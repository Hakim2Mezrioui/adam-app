import { legacy_createStore } from "redux";
import { TacheReducers } from "./TacheReducers";

export const TacheStore = legacy_createStore(TacheReducers);