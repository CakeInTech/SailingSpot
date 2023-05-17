import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reserveBoat } from "../Redux/Reservations/addResevation";
import { userSelector } from "../Redux/userslice";
import { allBoats, fetchBoatData } from "../Redux/Boats/boatSlice";

const Reserve = () => {
  const [city, setCity] = useState("")
  const [boat, setBoat] = useState();
  const [pick_up, setPick_up] = useState(null);
  const [return_date, setReturn_date] = useState(null);
  const dispatch = useDispatch();

  const { boats } = useSelector(allBoats);
  const user = useSelector(userSelector);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBoat(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchBoatData());
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      boat_id: boat,
      pick_up: pick_up,
      return_date: return_date,
      city: city,
    };
    dispatch(reserveBoat(reservation));
    navigate("/my-reservations");
  };

  return (
    <div>
      <h1 className="text-center mt-5 border border-primary">
        Book a Test Ride
      </h1>
      <form className="w-50 mx-auto was-validated" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="boat">Select a boat</label>
          <select
            className="form-control form-input"
            onChange={handleChange}
            name="boat_id"
          >
            <option value="">Select a boat</option>
            {boats && boats.map((boat) => {
                if (boat.availability === true) {
                  return (
                    <option
                    className="select-input"
                    key={boat.id}
                    value={boat.id}
                    >
                      {boat.name}
                    </option>
                  );
                }
                return null;
              })}
          </select>
        </div>
        <div className="form-group m-4">
          <label htmlFor="city">Enter city</label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
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
            onChange={(e) => setPick_up(e.target.value)}
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
            onChange={(e) => setReturn_date(e.target.value)}
            required
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        {user.success && (
          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default Reserve;
