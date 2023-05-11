import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userSelector } from '../redux/userslice';

const Welcome = () => {
    const user = useSelector(userSelector)
  console.log(user)

  return (
    <div>
      {user && (
        <>
          <h1>Welcome, {user.name}!</h1>
          <p>Your email address is {user.email}</p>
          <p>You have successfully signed up.</p>
        </>
      )}
      <div>
        <h1>signup</h1>
        <p>Don't have account? <Link to="/signup">Sign up here.</Link></p>
      </div>
      <div>
        <h1>Login</h1>
        <p>have account? <Link to="/login">login up here.</Link></p>
      </div>
    </div>
  );
  
};

export default Welcome;
