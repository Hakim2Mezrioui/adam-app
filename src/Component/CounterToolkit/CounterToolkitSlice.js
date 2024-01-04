import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cpt: 7,
}

const CounterSlice = createSlice({
    name: "counter slice toolkit",
    initialState,
    reducers: {
        increment: (state) => {
            state.cpt += 1;
        },

        decrement: (state) => {
            state.cpt--;
        },

        reset: (state) => {
            state.cpt = 0;
        }
    }
});

export const counterToolkitSliceActions = CounterSlice.actions;

export const counterToolkitSliceStore = configureStore({ reducer: CounterSlice.reducer});
