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
      <h1>City Name: {reservation.id}</h1>
      ))}
    </div>
  );
};

export default MyReservations;