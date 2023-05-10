import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBoatData } from "../actions/boat";
import Spinner from "./Spinner.js";
import crousel1 from "../../assets/images/first_crousel.jpg";
import "../css/homepage.css";

const Homepage = () => {

  const dispatch = useDispatch();
  const { boats, status } = useSelector((state) => state.boat);

  useEffect(() => {
    dispatch(fetchBoatData());
  }, [dispatch]);

  return (
    <>
      <section>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={crousel1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h5 className="text-light text-center">
                  We have the best Boat to reserve
                </h5>
                <p className="text-light text-center">
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://th.bing.com/th/id/OIP.tpYSzRcmKZNxarxvlpMz-AHaEo?pid=ImgDet&rs=1"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h5 className="text-light text-center">Second slide label</h5>
                <p className="text-light text-center">
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://th.bing.com/th/id/OIP.tpYSzRcmKZNxarxvlpMz-AHaEo?pid=ImgDet&rs=1"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                <h5 className="text-light text-center">Third slide label</h5>
                <p className="text-light text-center">
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
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
                      <div className="card h-100">
                        <img
                          src={boat.photo}
                          className="card-img-top"
                          alt="boat"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{boat.name}</h5>
                          <p className="card-text">{boat.description}</p>
                        </div>
                        <div className="card-footer">
                          <Link
                            to={`details/${boat.id}`}
                            type="button"
                            className="btn btn-outline-primary"
                          >
                            {" "}
                            View more
                          </Link>
                        </div>
                      </div>
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
