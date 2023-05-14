import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/userslice";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = formData?.email;
    const password = formData?.password;
  
    dispatch(
      loginUser({
        email,
        password,
      })
      ).then(() => {
        navigate('/');
      }).catch(error => {
        const err = 'Email or Password not correct';
        setErrorMessage(err);
      });
    }

  

  return (
    <div className='signup-container'>
    <h1>Login Account</h1>
    <form onSubmit={handleSubmit}>
    {errorMessage && <p style={{color: 'red', fontSize: '0.8em'}}>{errorMessage}</p>}
    <label>
    Email:
    <input
             type="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
             required
           />
    </label>
    <br />
    <label>
    Password:
    <input
             type="password"
             name="password"
             value={formData.password}
             onChange={handleChange}
             required
           />
    </label>
    <br />
    <button type="submit">Submit</button>
    </form>
    <p>
    Don't have an account? <Link to="/signup">Sign up here.</Link>
    </p>
    </div>
    );
    };
    
    export default Login;