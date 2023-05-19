import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReservations } from "../Redux/Reservations/reservationsReducer";
import Spinner from "./Spinner";
import "../scss/myreservation.scss";

const MyReservations = () => {
  const dispatch = useDispatch();
  const { reservations, status } = useSelector(
    (state) => state.reservations
  );

  useEffect(() => {
    dispatch(getReservations(1));
  }, [dispatch]);

  if (status === "loading" || status === "failed") {
    return <Spinner />;
  }

  return (
    <section className="reservation my-4 mx-auto">
      <h1 className="reserveHeader text-center">My Reservation</h1>
      <div className="row">
        {reservations && reservations.map((reservation) => (
          <div className="col-md-6 col-lg-4 mb-3" key={reservation.id}>
            <div className="card">
              <img
                src={reservation.boat_photo}
                className="card-img-top"
                alt="Boat photo"
              />
              <div className="card-body">
                <h5 className="card-title">{reservation.city}</h5>
                <p className="card-text">Pick-up: {reservation.pick_up}</p>
                <p className="card-text">
                  Return date: {reservation.return_date}
                </p>
                <p className="card-text">Boat name: {reservation.boat_name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyReservations;
