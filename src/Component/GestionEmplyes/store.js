import { createStore } from "redux";
import empReducers from "./reducers";

const store = createStore(empReducers);

export default store;
