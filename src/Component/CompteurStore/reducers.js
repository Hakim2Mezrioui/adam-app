const initState = {
  cpt: 0,
};

export function reducersCpt(state = initState, actions) {
  switch (actions.type) {
    case "increment":
        return {
            cpt: state.cpt + 1,
        };

    case "decrement":
        return {
            cpt: state.cpt - 1,
        }

    default :
        return state;
  }
}

// let num = 0;
// num = num + 2;
// num ++;
// num += 2;
