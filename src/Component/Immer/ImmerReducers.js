import { produce } from "immer";

const initialState = {
  courses: [],
  nameOfRedux: "Immer Redux",
};

export const ImmerReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case "append":
    //   return {
    //       ...state,
    //     courses: [...state.courses, actions.payload],
    //   };

      return produce(state, (draftState) => {
        draftState.courses.push(actions.payload);
      });

    case "delete":
    //     return produce(state, (draftState) => {
    //         draftState.courses.splice(actions.payload, 1);
    //     });
        // state.courses.splice(actions.payload, 1);
        let coursesC = [...state.courses];
        coursesC.splice(actions.payload, 1);
      return {
        ...state,
        courses: coursesC,
      }

    default:
      return state;
  }
};
