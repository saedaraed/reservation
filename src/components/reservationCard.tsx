import React from 'react'
import { CardReservatopn } from './Style'
import { useDispatch } from 'react-redux';
import { removeReservation } from '../redux/ReservationSlice';
import {addCustomer} from "../redux/CustomerSlice"
import {v4 as uuid} from "uuid"

interface ReservationCardTypes{
  name: string;
  index:number
}
export default function ReservationCard({ name, index }: ReservationCardTypes) {
  const dispatch = useDispatch();
  return (
    <CardReservatopn onClick={() => {
      dispatch(removeReservation(index))

      dispatch(addCustomer({
        id: uuid(),
        name,
        food: [],
      }))
      }}>{ name}</CardReservatopn>
  )
}
