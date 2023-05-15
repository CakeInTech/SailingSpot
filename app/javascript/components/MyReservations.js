import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReservations } from "../Redux/Reservations/reservationsReducer";
import '../scss/myreservation.scss';

const MyReservations = () => {
  const dispatch = useDispatch();
  const { reservations, status, error } = useSelector(
    (state) => state.reservations
  );

  useEffect(() => {
    dispatch(getReservations(1));
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <section className="reservation mt-5">
      <h1 className="reserveHeader text-center">My Reservation</h1>
      <div className="table-responsive">
        <table className="table border-primary mx-auto">
          <tr>
            <th scope="row">ID</th>
            <th scope="row">City</th>
            <th scope="row">Pick_up</th>
            <th scope="row">Return_date</th>
          </tr>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <th scope="row">{reservation.id}</th>
              <td class="tItem">{reservation.city}</td>
              <td class="tItem">{reservation.pick_up}</td>
              <td class="tItem">{reservation.return_date}</td>
            </tr>
          ))}
        </table>
      </div>
    </section>
  );
};

export default MyReservations;
