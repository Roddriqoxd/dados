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
        },
        numeroAleatorio2al12: (state) => {
            state.value = numeroAleatorioEntreDosYDoce();
        }
    }
})


function numeroAleatorioEntreDosYDoce(): number {

    const numeroAleatorio = Math.random();
    const numeroEscalado = Math.floor(numeroAleatorio * 11) + 2;

    return numeroEscalado;
}
export const {
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    reset,
    numeroAleatorio2al12
} = counterSlice.actions
export default counterSlice.reducer