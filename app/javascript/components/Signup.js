import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import userslice, { registerUser, userSelector } from '../redux/userslice';
import '../scss/signup.scss';


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
    ).then(() => {
      navigate('/');
    }).catch(error => {
      const err = ('Registration failed with error:', error);
    });
  }


  return (
    <div className='signup-container'>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={state.name} onChange={handleInputChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={state.email} onChange={handleInputChange} required/>
        </label>
        <label>
          Password:
          <input type="password" name="password" value={state.password} onChange={handleInputChange} required />
        </label>
        <label>
          Re-Password:
          <input type="password" name="password_confirmation" value={state.password_confirmation} onChange={handleInputChange} required />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account?  <Link to="/login">Login up here</Link></p>

    </div>
  );
}

export default SignUp;
