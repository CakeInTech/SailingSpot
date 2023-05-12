import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBoat } from '../Redux/Boats/removeBoat'

const DeleteBoat = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(removeBoat(5, {
      "name": "new test speed",
      "description": "New speed boat can carry 12persons",
      "photo": "No a foto",
      "price": 10.0,
      "model": "test",
      "user_id": 3
    }));
  };
  return (
    <div><h1>Homepage</h1>
      <button type="submit" className="input-submit" onClick={handleSubmit}>
        Delete Boat
      </button>
    </div>
  );
};

export default DeleteBoat;