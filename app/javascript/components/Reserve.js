import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReservation } from "../Redux/Reservations/addResevation";
import { userSelector } from '../Redux/userslice';

const Reserve = () => {
  const [city, setCity] = useState("");
  const [pick_up, setPick_up] = useState("");
  const [return_date, setReturn_date] = useState("");
  const dispatch = useDispatch();
  const boatsId = useSelector(allBoatsId);
  // console.log('lists of boats', boatsId)

  const boats = useSelector((state) => state.boats.boats);
  const user = useSelector(userSelector);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() && pick_up.trim() && return_date.trim()) {
      dispatch(addReservation(3, {
        city,
        pick_up,
        return_date,
        boat_id: boatsId.id,
        user_id: user.id,
      }));
      setCity('');
      setPick_up('');
      setReturn_date('');
      alert('Reservation created successfully')
    } else {
      alert('Enter details');
    }
  };

  return (
    <div>
      <h1 className="text-center mt-5 border border-primary">
        Book a Test Ride
      </h1>
      <form className="w-50 mx-auto was-validated" onSubmit={handleSubmit}>
        <div className="form-group m-4">
          <label htmlFor="city">Enter city</label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="city"
            name="city"
            value={city}
            onChange = {(e) => setCity(e.target.value)}
            required
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group m-4">
          <label htmlFor="pick-up">Pick-Up Date</label>
          <input
            type="date"
            className="form-control"
            id="pick-up"
            placeholder="pick-up date"
            name="pick_up"
            value={pick_up}
            onChange = {(e) => setPick_up(e.target.value)}
            required
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group m-4">
          <label htmlFor="return-date">Return Date</label>
          <input
            type="date"
            className="form-control"
            id="return-date"
            placeholder="return-date"
            name="return_date"
            value={return_date}
            onChange = {(e) => setReturn_date(e.target.value)}
            required
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        {user.success && (
          <button type="submit" className="btn btn-primary mt-4">Submit</button>
        )}
      </form>
    </div>
  );
};

export default Reserve;
