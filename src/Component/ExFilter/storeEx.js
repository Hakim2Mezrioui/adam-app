import { legacy_createStore } from "redux";
import reducersEx from "./reducersEx";

export const storeEx = legacy_createStore(reducersEx);