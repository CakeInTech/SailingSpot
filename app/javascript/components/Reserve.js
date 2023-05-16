import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addReservation } from "../Redux/Reservations/addResevation";

const Reserve = () => {
  const [city, setCity] = useState("");
  const [pick_up, setPick_up] = useState("");
  const [return_date, setReturn_date] = useState("");
  const boat = useSelector((state) => state.boats.boats);
  const user = useSelector((state) => state.user);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() && pick_up.trim() && return_date.trim()) {
      dispatch(addReservation(user.id, {
        city,
        pick_up,
        return_date,
        boat_id: boat.id,
        user_id: user.id,
      }));
      setCity('');
      setPick_up('');
      setReturn_date('');
    } else {
      alert('Enter details');
    }
  };

  return (
    <div>
      <h1 className="text-center mt-5 border border-primary">
        Book a Test Ride
      </h1>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="form-group m-4">
          <label for="city">Enter city</label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="city"
            name="city"
            value={city}
            onChange = {(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group m-4">
          <label for="pick-up">Pick-Up Date</label>
          <input
            type="date"
            className="form-control"
            id="pick-up"
            placeholder="pick-up date"
            name="pick_up"
            value={pick_up}
            onChange = {(e) => setPick_up(e.target.value)}
          />
        </div>
        <div className="form-group m-4">
          <label for="return-date">Return Date</label>
          <input
            type="date"
            className="form-control"
            id="return-date"
            placeholder="return-date"
            name="return_date"
            value={return_date}
            onChange = {(e) => setReturn_date(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Reserve;
