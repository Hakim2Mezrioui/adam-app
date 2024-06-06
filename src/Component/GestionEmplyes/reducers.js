const initState = {
  employes: [],
  updatingEmp: {},
};

const empReducers = (state = initState, action) => {
  switch (action.type) {
    case "add":
      console.log(state);
      return {
        ...state,
        employes: [...state.employes, action.payload],
      };
    case "edit":
      return {
        ...state,
        updatingEmp: {
          ...action.payload.emp,
          index: action.payload.index,
        },
      };
    case "update":
      state.employes.splice(action.payload.index, 1, action.payload);
      console.log(state);
      return {
        ...state,
        employes: [...state.employes],
      };
    case "delete":
      const index = action.payload;
      console.log(index);
      state.employes.splice(index, 1);

      return {
        ...state,
        employes: [...state.employes],
      };
    default:
      return state;
  }
};

export default empReducers;
