import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBoatData } from "../actions/boat";
import Spinner from "./Spinner.js";
import "../scss/homepage.scss";

const Homepage = () => {
  const dispatch = useDispatch();
  const { boats, status } = useSelector((state) => state.boat);

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
          <div className="spinner-here-appointment">
            <Spinner />
          </div>
        ) : (
          boats.map((boat) => {
            if (boat.availability === true) {
              return (
                <div className="col" key={boat.id}>
                  <Link to={`details/${boat.id}`}>
                    <div className="card h-100">
                      <div className="card-img-container">
                        <div className="circle"></div>
                        <img
                          src={boat.photo}
                          className="card-img-top"
                          alt="boat"
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          {boat.name}
                        </h5>
                        <p className="card-text text-center">{boat.description}</p>
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
