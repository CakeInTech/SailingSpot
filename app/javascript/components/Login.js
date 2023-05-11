import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/login', { email, password })
      .then((response) => {
        // Handle successful login
        console.log(response.data);
      })
      .catch((error) => {
        // Handle login error
        setError(error.response.data.error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      {error && <p>{error}</p>}
      <button type="submit">Log in</button>
      <div>
        <h1>Login</h1>
        <p>Don't have account? <Link to="/signup">Sign up here.</Link></p>
       </div>
    </form>
  );
};

export default Login;


