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
      <form>
        <div class="form-group">
          <label for="city">Enter city</label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="city"
          />
        </div>
        <div class="form-group">
          <label for="pick-up">Pick-Up Date</label>
          <input
            type="date"
            className="form-control"
            id="pick-up"
            placeholder="pick-up date"
          />
        </div>
        <div class="form-group">
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
