import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TodiseState {
    value: number;
}

interface Retos {
    retos: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
    }

}


const initialState: Retos = {
    retos: {
        0: '',
        1: '',
        2: 'Hermanos',
        3: 'Todos o nadie',
        4: 'Choque',
        5: 'Obligas',
        6: 'Cultura chupistica',
        7: 'Derecha',
        8: 'Pulgar',
        9: 'Izquierda',
        10: 'Mano arriba',
        11: 'Solo',
        12: 'Por él o por ella',
    }
}


const todiseSlice = createSlice({
    name: 'retos',
    initialState,
    reducers: {
        editar: (state, actions: PayloadAction<[number, string]>) => {
            state.retos[actions.payload[0]] = actions.payload[1];
        },
    }
})

export const {
    editar
} = todiseSlice.actions
export default todiseSlice.reducer