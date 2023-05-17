import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBoat } from '../Redux/Boats/addBoat';

const AddBoat = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState('')
  const [price, setPrice] = useState('')
  const [model, setModel] = useState('')
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.trim() && description.trim() && photo.trim() && price.trim() && model.trim()){
      dispatch(addBoat({
        name,
        description,
        photo,
        price,
        model
      }));
      setName('')
      setDescription('')
      setPhoto('')
      setPrice('')
      setModel('')
    }
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