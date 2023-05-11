import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBoatData } from "../actions/boat";
import Spinner from "./Spinner.js";
import crousel1 from "../../assets/images/first_crousel.jpg";
import "../../../node_modules/bootstrap/js/dist/carousel"
import "../scss/homepage.scss";

const Homepage = () => {
  const dispatch = useDispatch();
  const { boats, status } = useSelector((state) => state.boat);

  useEffect(() => {
    dispatch(fetchBoatData());
  }, [dispatch]);

  return (
    <>
      <section>
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={crousel1} class="d-block w-100" alt="..." />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h5 className="text-light text-center">Second slide label</h5>
                <p className="text-light text-center">
                  Some representative placeholder content for the second slide.
                </p>
              </div>

            </div>
            <div class="carousel-item">
              <img src={crousel1} class="d-block w-100" alt="..." />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h5 className="text-light text-center">Second slide label</h5>
                <p className="text-light text-center">
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={crousel1} class="d-block w-100" alt="..." />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h5 className="text-light text-center">Second slide label</h5>
                <p className="text-light text-center">
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <main className="mt-5">
          {status === null || status === "pending" ? (
            <Spinner />
          ) : (
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {boats.map((boat) => {
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
                            <p className="card-text text-center">......</p>
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
              })}
            </div>
          )}
        </main>
      </section>
    </>
  );
};

export default Homepage;
