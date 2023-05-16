import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, userSelector } from '../Redux/userslice';

const Welcome = () => {
  const user = useSelector(userSelector)
  console.log(user)
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const handleLogout = async () => {
    try {
      await fetch("/logout", { method: "DELETE" });
      dispatch(logout());
      navigate('/signup')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {user.success && (
        <>
          <h1>Welcome, {user.name}!</h1>
          <p>Your email address is {user.email}</p>
          <p>You have successfully signed up.</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}

       {!user.success && (
        <>
          <div>
            <h1>signup</h1>
            <p>
              Don't have an account? <Link to="/signup">Sign up here.</Link>
            </p>
          </div>
          <div>
            <h1>Login</h1>
            <p>
              Have an account? <Link to="/login">Login up here.</Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
  
};

export default Welcome;
