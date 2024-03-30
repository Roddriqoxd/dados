import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Eventos {
    editar: boolean;
    menuTodise: boolean;
}

const initialState: Eventos = {
    editar: false,
    menuTodise: true,
}

const counterSlice = createSlice({
    name: 'evento',
    initialState,
    reducers: {
        editando: (state) => {
            state.editar = true
        },
        editEnd: (state) => {
            state.editar = false
        },
        menuOpenTodise: (state) => {
            state.menuTodise = true
        },
        menuCloseTodise: (state) => {
            state.menuTodise = false
        },
    }
})
export const {
    editando,
    editEnd,
    menuOpenTodise,
    menuCloseTodise
} = counterSlice.actions
export default counterSlice.reducer