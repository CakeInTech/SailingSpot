import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBoat } from "../Redux/Boats/addBoat";

const AddBoat = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [model, setModel] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() &&
      description.trim() &&
      photo.trim() &&
      price.trim() &&
      model.trim()
    ) {
      dispatch(
        addBoat({
          name,
          description,
          photo,
          price,
          model,
        })
      );
      setName("");
      setDescription("");
      setPhoto("");
      setPrice("");
      setModel("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1 className="text-center mt-5 border border-primary">Add a Boat</h1>
        <div className="form-group m-4">
          <label for="city">Enter Boat Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group m-4">
          <label for="city">Enter Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group m-4">
          <label for="city">Enter Photo</label>
          <input
            type="string"
            className="form-control"
            id="photo"
            placeholder="photo"
            name="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            required
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group m-4">
          <label for="city">Enter Model</label>
          <input
            type="text"
            className="form-control"
            id="model"
            placeholder="model"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="form-group m-4">
          <label for="city">Enter Model</label>
          <input
            type="decimal"
            className="form-control"
            id="price"
            placeholder="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        <button type="submit" className="input-submit">
          Add Boat
        </button>
      </div>
    </form>
  );
};

export default AddBoat;
