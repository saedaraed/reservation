import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
    
    
interface ReservationState {
    value: string[]
}
const initialState :ReservationState = {
    value: []
}

export const ReservationSlice = createSlice({
    name: "reservation",
    initialState, 
    reducers: {
        addReservation: (state , action: PayloadAction<string>) => {
            state.value.push(action.payload )
        },
        removeReservation: (state , action: PayloadAction<number>) => {
            state.value.splice(action.payload , 1)
        }
    }
})
 

export const { addReservation , removeReservation} = ReservationSlice.actions
export default ReservationSlice.reducer