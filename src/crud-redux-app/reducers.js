const initialState = {
  stagiaires: [
    {
      id: 1,
      matricule: "1455",
      nom: "alaoui",
      codePostal: 20400,
      ville: "casa",
      moyenne: 19,
    },
  ],
  stagiaireSelected: {},
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "ajouter":
      if (action.payload.moyenne > 20 || action.payload.moyenne < 0) {
        return state; // break
      }
      return {
        ...state,
        stagiaires: [...state.stagiaires, action.payload],
      };
    case "supprimer":
      // const stg = state.stagiaires;
      // stg.splice(action.payload, 1);

      const stg = state.stagiaires.filter(
        (stagiaire) => stagiaire.id != action.payload
      );
      return {
        ...state,
        stagiaires: [...stg],
      };
    case "editer":
      return {
        ...state,
        stagiaireSelected: { ...action.payload },
      };
    default:
      return state;
  }
};
