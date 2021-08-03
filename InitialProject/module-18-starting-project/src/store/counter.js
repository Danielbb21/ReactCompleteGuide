import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0,
    showCounter: true
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrease(state) {
            state.counter--;
        },
        increase(state, action) {

            state.counter += action.payload;
        },
        toogleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
