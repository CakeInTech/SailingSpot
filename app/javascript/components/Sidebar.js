import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink } from 'react-router-dom';
import { logout, userSelector } from '../Redux/userslice';
import '../scss/sidebar.scss';
import '../../../node_modules/boxicons/css/boxicons.min.css'
const Sidebar = () => {
  const { authorization } = useSelector((state) => state.authorization);
  const user = useSelector(userSelector);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { name } = user;
  console.log('Hello user ' + {name} );
  useEffect(() => {
    const body = document.querySelector('body');
    const sidebar = body.querySelector('nav');
    const toggle = body.querySelector('.toggle');
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('close');
    });
  }, []);
  const handleLogout = async () => {
    try {
      await fetch("/logout", { method: "DELETE" });
      dispatch(logout());
      window.location.reload();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="sidebar">
      <header>
        <div className="image-text">
          <span className="image">
            {/* <img src="logo.png" alt=""> */}
          </span>
          <div className="text logo-text">
            <span className="name">Sailing Spot</span>
          </div>
        </div>
        <i className="bx bx-chevron-right toggle"></i>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            {user.success && (
            <li className="nav-link"><p className="text nav-text">Welcome { name }</p></li>
            )}
            <li className="nav-link">
              <NavLink to="/" activeclassname="active">
                <i className="bx bxs-home-alt-2 icon"></i>
                <span className="text nav-text">Home</span>
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/reserve" activeclassname="active">
                <i className="bx bxs-book-content icon"></i>
                <span className="text nav-text">Reservation</span>
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/my-reservations" activeclassname="active">
                <i className="bx bx-book-bookmark icon"></i>
                <span className="text nav-text">My Reservation</span>
              </NavLink>
            </li>
            {authorization.includes('create') && (
              <li className="nav-link">
                <NavLink to="/add-boat" activeclassname="active">
                  <i className="bx bxs-add-to-queue icon"></i>
                  <span className="text nav-text">Add Boat</span>
                </NavLink>
              </li>
              )}
              {authorization.includes('create') && (
              <li className="nav-link">
                <NavLink to="/delete-boat" activeclassname="active">
                  <i className="bx bxs-message-alt-x icon"></i>
                  <span className="text nav-text">Delete Boat</span>
                </NavLink>
              </li>
              )}
              {user.success && (
                <li className="nav-link">
                  <NavLink to="/" activeclassname="active">
                    <i class='bx bx-log-out icon'></i>
                    <span onClick={handleLogout} className="text nav-text">Logout</span>
                  </NavLink>
                </li>
              )}
              {!user.success && (
                <li className="nav-link">
                  <NavLink to="/login" activeclassname="active">
                    <i class='bx bx-log-in icon'></i>
                    <span className="text nav-text">Login</span>
                  </NavLink>
                </li>
              )}
              
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Sidebar;