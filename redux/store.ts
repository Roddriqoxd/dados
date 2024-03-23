import {configureStore} from "@reduxjs/toolkit";
import Contar from '../feacture/conteo/contar'


export const store = configureStore({
    reducer: {
        counter: Contar,
    }
})

export  type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof  store.getState>