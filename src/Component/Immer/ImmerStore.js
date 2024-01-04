import { legacy_createStore } from "redux";
import { ImmerReducers } from "./ImmerReducers";

export const ImmerStore = legacy_createStore(ImmerReducers);