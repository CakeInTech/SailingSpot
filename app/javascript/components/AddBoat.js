import React from 'react';
import { useDispatch } from 'react-redux';
import { addBoat } from '../Redux/Boats/addBoat';

const AddBoat = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBoat({
      "name": "new test speed",
      "description": "New speed boat can carry 12persons",
      "photo": "No a foto",
      "price": 10.0,
      "model": "test",
      "user_id": 3
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div><h1>Homepage</h1>
        <button type="submit" className="input-submit">
          Add Boat
        </button>
      </div>
    </form>
  );
};

export default AddBoat;