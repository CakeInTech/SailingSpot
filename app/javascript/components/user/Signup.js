import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../../scss/signup.scss';
import { registerUser } from '../../redux/userslice'

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

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
      const err = 'Registration failed with error: check email format and password must match';
      setErrorMessage(err);
    });
  }


  return (
    <div className='signup-container'>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        {errorMessage && <p style={{color: 'red', fontSize: '0.8em'}}>{errorMessage}</p>}
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
