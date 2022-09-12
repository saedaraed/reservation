import { configureStore } from "@reduxjs/toolkit";
import reservationreduce from "./ReservationSlice"
import customerreduce from "./CustomerSlice"
import authreducer from "./auth"

export const store = configureStore({
    reducer: {
        reservations: reservationreduce, 
        customer: customerreduce, 
              auth:authreducer,

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch