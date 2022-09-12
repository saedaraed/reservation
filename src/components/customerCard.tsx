import React, { useState } from 'react'
import { CustomerCardStyle } from './Style'
import { addFoodCustomer } from "../redux/CustomerSlice";
// import { addFoodToCustomer } from "../redux/CustomerSlice";
import { useDispatch } from 'react-redux';

interface CustomerCardType {
  id: string,
  name: string,
  food : string[],
}

export default function CustomerCard({ id, name, food }: CustomerCardType) {
    const [customerFoodInput, setCustomerFoodInput] = useState("");
  const dispatch = useDispatch();
  return (
      <CustomerCardStyle>
          <h5>{name}</h5>
          <div className="customer-food">
          {food.map((food) => {
            return <p>{food}</p>;
          })}
        </div>
      <input type="text" value={customerFoodInput} onChange={(e) => setCustomerFoodInput(e.target.value)} />
              <button
            onClick={() => {
              dispatch(
               addFoodCustomer({
                  id,
                  food: customerFoodInput,
                })
              );
            }}
          >
            Add
          </button>
    </CustomerCardStyle>
  )
}
