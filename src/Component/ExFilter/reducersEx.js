import {dataR} from "./data";

const intialState = {
    fruits: dataR,
    fruitsFiltred: dataR,
}

function reducersEx(state = intialState, action) {
    switch(action.type) {
        case "search":
            const dataF = state.fruits.filter((item) => {
                return item.includes(action.pyload);
            })
            return {
                ...state,
                fruitsFiltred: dataF,
            };
        case "reset":
            return {
                ...state,
                fruitsFiltred: state.fruits,
            }
        default:
            return state;
    }
}

export default reducersEx;