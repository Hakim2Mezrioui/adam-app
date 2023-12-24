const initialState = {
    taches: []
}

export const TacheReducers = (state = initialState, actions) => {
    switch(action.type) {
        case "append":
            return {
                ...state,
                taches: [...state.taches, actions.payload],
            }

        default:
            return state;
    }
}