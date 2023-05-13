import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { getBoats } from "../Redux/Boats/boatsReducer";
import { addReservation } from "../Redux/Reservations/addResevation";

const Reserve = () => {
  const [city, setCity] = useState('')
  const [pick_up, setPick_up] = useState('')
  const [return_date, setReturn_date] = useState('')
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(city.trim() || pick_up.trim() || return_date.trim()){
      const newReservation = {
        city,
        pick_up,
        return_date
      }
      dispatch(addReservation(newReservation));
      setCity('')
      setPick_up('')
      setReturn_date('')
    }
  };
  const handleCity = e => {
    e.preventDefault();
    setCity(e.target.value);
  }
  const handlePickUp = e => {
    e.preventDefault();
    setPick_up(e.target.value);
  }
  const handleReturnDate = e => {
    e.preventDefault();
    setReturn_date(e.target.value);
  }

  return (
    <div>
      <h1 className="text-center mt-5 border border-primary">Book a Test Ride</h1>
      <form className="w-50 mx-auto">
        <div className="form-group m-4">
          <label for="city">Enter city</label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="city"
            name="city"
            value={city}
            onChange={handleCity}
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
            onChange={handlePickUp}
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
            onChange={handleReturnDate}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Reserve;
