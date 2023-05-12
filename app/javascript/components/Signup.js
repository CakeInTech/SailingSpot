import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userslice, { registerUser, userSelector } from '../redux/userslice';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      name, email, password, password_confirmation
    } = state

    dispatch(
      registerUser({
        name, email, password, password_confirmation
      })
    )
    navigate('/welcome')
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={state.name} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={state.email} onChange={handleInputChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={state.password} onChange={handleInputChange} />
      </label>
      <label>
        Re-Password:
        <input type="password" name="password_confirmation" value={state.password_confirmation} onChange={handleInputChange} />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
