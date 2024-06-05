

const initState = {
  persons: [],
  mode: "ajouter",
  check: "check",
};

const personReducers = (state = initState, action) => {
  switch (action.type) {
    case "supprimer":
      const personsFiltre = state.persons.filter((person, index) => {
        return index !== action.pyload;
      });

      return {
        ...state,
        persons: personsFiltre,
      };

    case "ajouter":
      return {
        ...state,
        persons: [...state.persons, action.pyload],
      };

    case "modifier":
      state.persons.splice(action.pyload.index, 1, action.pyload.person);

      return {
        ...state,
        mode: "ajouter",
        persons: [...state.persons],
      };

    case "changeMode":
      return {
        ...state,
        mode: action.pyload,
      };

    default:
      return state;
  }
};

export default personReducers;
