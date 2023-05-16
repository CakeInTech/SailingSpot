import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBoatData } from "../Redux/Boats/boatSlice.js";
import { allStatus, allBoats } from "../Redux/Boats/boatSlice.js";
import Spinner from "./Spinner.js";
import "../scss/homepage.scss";

const Homepage = () => {
  const dispatch = useDispatch();
  const boats = useSelector(allBoats)
  const status = useSelector(allStatus)
  console.log("here we gooo", boats, status);

  useEffect(() => {
    dispatch(fetchBoatData());
  }, [dispatch]);

  return (
    <section className="main-container">
      <h1 className="text-center">Boats for Rent</h1>
      <p className="text-center sub-header">Choose your boat</p>
      <div className="dot"></div>

      <main className="row row-cols-1 row-cols-md-3 g-4">
        {status === null || status === "pending" ? (
            <Spinner />
        ) : (
          boats?.boats?.map((boat) => {
            if (boat.availability === true) {
              return (
                <div className="col" key={boat.id}>
                  <Link to={`details/${boat.id}`}>
                    <div className="card h-100">
                      <div className="card-img-container">
                        <img
                          src={boat.photo}
                          className="card-img-top"
                          alt="boat"
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-center">{boat.name}</h5>
                        <p className="card-text text-center">
                          {boat.description}
                        </p>
                        <p className="card-text text-center">
                          Price: {boat.price}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            }
            return null;
          })
        )}
      </main>
    </section>
  );
};

export default Homepage;
