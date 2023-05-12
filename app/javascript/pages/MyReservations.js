import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReservations } from '../Redux/Reservations/reservationsReducer';

const MyReservations = () => {

  const dispatch = useDispatch();
  const { reservations, status, error } = useSelector((state) => state.reservations);

  useEffect(() => {
    dispatch(getReservations(1));
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      {reservations.map((reservation) => (
        <div>
          <h1>City Name: {reservation.city}</h1>
          <h3>Pick Up: {reservation.pick_up}</h3>
          <h3>Return Date: {reservation.return_date}</h3>
        </div>
      ))}
    </div>
  );
};

export default MyReservations;