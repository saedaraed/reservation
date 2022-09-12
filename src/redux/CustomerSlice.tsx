import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"


interface Customer{
    id: string
    name: string
    food : string[]
}
interface AddFoodToCustomerPayload {
  food: string;
  id: string;
}

interface CustomerState {
    value: Customer[]
}
const initialState :CustomerState = {
    value: []
}

export const CustomerSlice = createSlice({
    name: "customer",
    initialState, 
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload)
      },
        addFoodCustomer: (state, action: PayloadAction<AddFoodToCustomerPayload>) => {
   state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });    }
    }
  
    }
)
 

export const { addCustomer , addFoodCustomer } = CustomerSlice.actions
export default CustomerSlice.reducer