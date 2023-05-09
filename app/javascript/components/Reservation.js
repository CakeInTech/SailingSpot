import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayReserveData } from '../actions/reservation';

const Reservation = () => {
  console.log('reserve rendered');
  const dispatch = useDispatch()
  const { reservations } = useSelector((state) => state.reserve)
  console.log(reservations);
  useEffect(() => {
    dispatch(displayReserveData);
  }, dispatch)
  return(
    <section>
      <div>
        <h1>Welcome to Sailing Spot</h1>
      </div>
      <main>
        {reservations.map((reservation) => {
          return (
            <div key={reservation.id}>
              <h3>{reservation.city}</h3>
              <h3>{reservation.pick_up}</h3>
              <h3>{reservation.return_date}</h3>
            </div>
          );
        })}
      </main>
    </section>
  )
}
export default Reservation;