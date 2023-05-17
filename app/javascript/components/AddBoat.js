import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoat } from "../Redux/Boats/addBoat";

const AddBoat = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useSelector((state) => state.user);
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [model, setModel] = useState("");
  const [availability, setAvailability] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() &&
      description.trim() &&
      photo.trim() &&
      price.trim() &&
      model.trim() &&
      availability.trim()
    ) {
      dispatch(
        addBoat(user.id, {
          name,
          description,
          photo,
          price,
          model,
          availability,
          user_id: user.id,
        })
      );
      setName("");
      setDescription("");
      setPhoto("");
      setPrice("");
      setModel("");
      setAvailability("");
    }
  };
  return (
    <div>
      <h1 className="text-center mt-5 border border-primary">Add a Boat</h1>
      <form class="w-50 mx-auto was-validated" onSubmit={handleSubmit}>
        <div className="form-group m-4">
          <label for="name">Enter Boat Name</label>
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
          <label for="description">Enter Description</label>
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
          <label for="photo">Enter Photo</label>
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
          <label for="price">Enter Price</label>
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
        <div className="form-group m-4">
          <label for="model">Enter Model</label>
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
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="availability"
            id="availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          />
          <label class="form-check-label" for="availability">
            Available
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="availability"
            id="availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Not Available
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Add Boat
        </button>
      </form>
    </div>
  );
};

export default AddBoat;
