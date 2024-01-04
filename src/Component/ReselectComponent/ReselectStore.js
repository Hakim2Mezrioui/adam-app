import { legacy_createStore } from "redux";
import { ReselectReducers } from "./ReselectReducers";

export const reselectStore = legacy_createStore(ReselectReducers);