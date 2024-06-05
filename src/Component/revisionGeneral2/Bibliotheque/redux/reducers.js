import { livresModule } from "../livres.module";

const initState = {
  livres: livresModule,
};

const BibliothequeReducers = (state = initState, action) => {
  switch (action.type) {
    case "ajouter":
      return {
        ...state,
        livres: [...state.livres, action.pyload],
      };
    case "supprimer":
        const L = state.livres.filter((livre) => {
            return livre.id != action.pyload;
        });
        return {
            ...state,
            livres: [...L],
        }
      return state;
    // case 'modifier':
    //     return {
    //         livres: // code
    //     }

    default:
      return state;
  }
};

export default BibliothequeReducers;
