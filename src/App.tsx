
import './App.css';
import { RootState } from "./redux/store"
import { useDispatch, useSelector } from 'react-redux';
import ReservationCard from './components/reservationCard';
import { useState } from 'react';
import { addReservation } from './redux/ReservationSlice';
import CustomerCard from './components/customerCard';
 
function App() {
 
  const dispatch = useDispatch();
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  )
  const customers = useSelector(
    (state: RootState) => state.customer.value
  )
  const [reservationNameInput , setReservationNameInput] =useState("")
  const handleReservation =()=> {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput))
    setReservationNameInput("")
}
  return (
    <div className="App">
      <div className="container" >
        
        <div className="sectionReservation">
          <h2>Reservation</h2>
          <div className="reserv">
          {reservations.map((name , index )=> {
            return <ReservationCard name={name} index={index} />
          })}
        </div>
          <input type="text" value={reservationNameInput} onChange={(e) => setReservationNameInput(e.target.value)} />
          <button onClick={handleReservation}>click</button>
        </div>
      </div> 
      <div>
 {customers.map((customer) => {
   return <CustomerCard id={customer.id} name= {customer.name} food={customer.food}
                key={customer.id} />
   
      })}
      </div>
     
    
    </div>
  );
}

export default App;
