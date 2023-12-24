export function reducersCpt2(state =  { cpt: 0, name: "hakim" }, actions) {
    switch (actions.type) {
        case "increment":
            return {
                ...state,
                cpt: state.cpt + 1
            }
        
        case 'decrement':
            return {
                ...state,
                cpt: state.cpt - 1
            }

        case "reset":
            return {
                ...state,
                cpt: 0
            }
    
        default:
            return state;
    }

    // if(actions.type === "increment") {
    //     return {
    //         ...state,
    //         cpt: state.cpt + 1
    //     }
    // }
    // else if(actions.type === "decrement") {
    //     return {
    //         ...state,
    //         cpt: state.cpt - 1
    //     }
    // }
    // else if (actions.type === 'reset') {
    //     return {
    //         ...state,
    //         cpt: 0
    //     }
    // } else {
    //     return state;
    // }
}