import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchDetailsData } from "../Redux/Boats/detailSlice";
import { allBoatsId, allStatus } from "../Redux/Boats/detailSlice";
import Spinner from "./Spinner";
import "../scss/details.scss";
import { userSelector } from '../Redux/userslice';

const Details = () => {
  const { id } = useParams();
  const boatsId = useSelector(allBoatsId);
  const status = useSelector(allStatus);
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  
  console.log("here we goooo", boatsId);

  useEffect(() => {
    if (id) {
      dispatch(fetchDetailsData({ boatsId: id }));
    }
  }, [dispatch, id]);

  return (
    <section className="h-100">
      {status === null || status === "loading" ? (
        <Spinner />
      ) : (
        boatsId && (
          <div className="container d-flex h-100 align-items-center flex-column my-6">
            <div className="row no-gutters">
              <div className="col-md-7">
                <img
                  className="img w-100"
                  src={boatsId.photo}
                  alt={boatsId.name}
                />
              </div>
              <div className="col-md-4">
                <div className="boat-container">
                  <h5 className="boat-title">{boatsId.name}</h5>
                  <div className="boat-details">
                    <div className="boat-row">
                      <div className="boat-label">Model:</div>
                      <div className="boat-value">{boatsId.model}</div>
                    </div>
                    <div className="boat-row">
                      <div className="boat-label">Price:</div>
                      <div className="boat-value">{boatsId.price}</div>
                    </div>
                    <div className="boat-row">
                      <div className="boat-label">Availability:</div>
                      <div
                        className={`boat-value ${
                          boatsId.availability ? "available" : "unavailable"
                        }`}
                      >
                        {boatsId.availability ? "Available" : "Unavailable"}
                      </div>
                    </div>
                    <div className="boat-row">
                      <div className="boat-label">Description:</div>
                      <div className="boat-value">{boatsId.description}</div>
                    </div>
                    {user.success && (
                    <div className="boat-row boat-bottom-row">
                      <Link
                        to={`/reserve/${boatsId.id}`}
                        className="btn btn-primary"
                      >
                        Reserve
                      </Link>
                    </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Details;
