import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value++;
        },
        decrement: (state) => {
            state.value--;
        },
        incrementByAmount: (state, actions: PayloadAction<number>) => {
            state.value += actions.payload;
        },
        decrementByAmount: (state, actions: PayloadAction<number>) => {
            state.value -= actions.payload;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
})

export const {
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    reset
} = counterSlice.actions
export default counterSlice.reducer