import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBoats } from "../Redux/Boats/boatsReducer";

const Reserve = () => {
  const dispatch = useDispatch();
  const { boats, status, error } = useSelector((state) => state.boats);

  useEffect(() => {
    dispatch(getBoats());
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
          />
        </div>
        <div className="form-group m-4">
          <label for="pick-up">Pick-Up Date</label>
          <input
            type="date"
            className="form-control"
            id="pick-up"
            placeholder="pick-up date"
          />
        </div>
        <div className="form-group m-4">
          <label for="return-date">Return Date</label>
          <input
            type="date"
            className="form-control"
            id="return-date"
            placeholder="preturn-datee"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Reserve;
