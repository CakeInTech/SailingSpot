import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoatData } from '../Redux/Boats/boatSlice';
import { updateBoatStatus } from '../Redux/Boats/statusSlice';

const Boats = () => {
  const dispatch = useDispatch();
  const { boats } = useSelector((state) => state.boats);
  const [localBoats, setLocalBoats] = useState([]); // Initialize local state with an empty array
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const updateStatus = async (boat, newAvailability) => {
    const data = {
      id: boat.id,
      boat: {
        availability: newAvailability,
      },
    };
    await dispatch(updateBoatStatus(data));
    dispatch(fetchBoatData());
  };

  useEffect(() => {
    dispatch(fetchBoatData());
  }, [dispatch]);

  useEffect(() => {
    setLocalBoats(Object.values(boats).flat()); // Update local state when the Redux state changes
  }, [boats]);

  const filteredBoats = showAvailableOnly
    ? localBoats.filter((boat) => boat.availability)
    : localBoats;

  return (
    <div className='container w-75'>
      <h1>Boats</h1>
      <div className="btn-group btn-group-toggle mb-3" data-toggle="buttons">
        <label className="btn btn-secondary active">
          <input
            type="radio"
            name="availability-options"
            value={false}
            checked={!showAvailableOnly}
            onChange={() => setShowAvailableOnly(false)}
          />
          All Boats
        </label>
        <label className="btn btn-secondary">
          <input
            type="radio"
            name="availability-options"
            value={true}
            checked={showAvailableOnly}
            onChange={() => setShowAvailableOnly(true)}
          />
          Available Boats Only
        </label>
      </div>
      <table className="table table-striped">
        <thead className='text-center'>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Model</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {filteredBoats.map((boat) => (
            <tr key={boat.id}>
              <td>{boat.id}</td>
              <td>{boat.name}</td>
              <td>{boat.model}</td>
              <td>
                <div
                  className="btn-group btn-group-toggle"
                  data-toggle="buttons"
                >
                  <label className="btn btn-outline-primary">
                    <input
                      type="checkbox"
                      name={`boat-${boat.id}-availability`}
                      value={true}
                      checked={boat.availability}
                      onChange={(e) =>
                        updateStatus(boat, e.target.checked)
                      }
                    />
                    Available
                  </label>
                  <label className="btn btn-outline-secondary">
                    <input
                      type="checkbox"
                      name={`boat-${boat.id}-availability`}
                      value={false}
                      checked={!boat.availability}
                      onChange={(e) =>
                        updateStatus(boat, !e.target.checked)
                      }
                    />
                    Unavailable
                  </label>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Boats;
