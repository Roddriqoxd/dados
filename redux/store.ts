import {configureStore} from "@reduxjs/toolkit";
import Contar from '../feacture/conteo/contar'
import Todise from '../feacture/conteo/todise'
import Eventos from '../feacture/conteo/eventos'


export const store = configureStore({
    reducer: {
        counter: Contar,
        retos: Todise,
        eventos: Eventos

    }
})

export  type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof  store.getState>