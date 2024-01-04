const intialState = {
    livres: []
}

export const ReselectReducers = (state = intialState, actions) => {
    switch (actions.type) {
        case 'ajouter':
            return {
                ...state,
                livres: [...state.livres, actions.payload]
            }
    
        default:
            return state;
    }
};