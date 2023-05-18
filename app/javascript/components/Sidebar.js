import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { logout, userSelector } from "../Redux/userslice";
import { getAuthorization } from "../Redux/Services/authorizationService";
import "../scss/sidebar.scss";
import "../../../node_modules/boxicons/css/boxicons.min.css";

const Sidebar = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { abilities } = useSelector((state) => state.authorization);

  useEffect(() => {
    dispatch(getAuthorization());
    const body = document.querySelector("body");
    const sidebar = body.querySelector("nav");
    const toggle = body.querySelector(".toggle");
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });
  }, [dispatch]);
  const handleLogout = async (thunkAPI) => {
    try {
      await fetch("/logout", { method: "DELETE" });
      dispatch(logout());
      window.location.reload();
      navigate("/login");
    } catch (error) {
       return thunkAPI.rejectWithValue(error.response.data)
    }
  };
  const isAuthorized = (resource_name, perform_action) => {
    if (Object.keys(abilities).length !== 0) {
      const rules = abilities["rules"];
      const rules_index = abilities["rules_index"];
      const resource_index = rules_index[resource_name][0];
      const actions = rules[resource_index]["actions"];
      return actions.includes(perform_action);
    } else {
      return false;
    }
  };
  return (
    <nav className="sidebar close">
      <header>
        <div className="image-text">
          <span className="image">{/* <img src="logo.png" alt=""> */}</span>
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
              <li className="nav-link">
                <p className="text nav-text">Welcome {user.name}</p>
              </li>
            )}
            <li className="nav-link">
              <NavLink to="/" activeclassname="active">
                <i className="bx bxs-home-alt-2 icon"></i>
                <span className="text nav-text">Home</span>
              </NavLink>
            </li>
            {user.success && (
            <li className="nav-link">
              <NavLink to="/reserve" activeclassname="active">
                <i className="bx bxs-book-content icon"></i>
                <span className="text nav-text">Reservation</span>
              </NavLink>
            </li>
            )}
             {user.success && (
            <li className="nav-link">
              <NavLink to="/my-reservations" activeclassname="active">
                <i className="bx bx-book-bookmark icon"></i>
                <span className="text nav-text">My Reservation</span>
              </NavLink>
            </li>
             )}
            {isAuthorized("Boat", "create") && (
              <li className="nav-link">
                <NavLink to="/add-boat" activeclassname="active">
                  <i className="bx bxs-add-to-queue icon"></i>
                  <span className="text nav-text">Add Boat</span>
                </NavLink>
              </li>
            )}
            {isAuthorized("Boat", "destroy") && (
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
                  <i className="bx bx-log-out icon"></i>
                  <span onClick={handleLogout} className="text nav-text">
                    Logout
                  </span>
                </NavLink>
              </li>
            )}
            {!user.success && (
              <li className="nav-link">
                <NavLink to="/login" activeclassname="active">
                  <i className="bx bx-log-in icon"></i>
                  <span className="text nav-text">Login</span>
                </NavLink>
              </li>
            )}
            {!user.success && (
              <li className="nav-link">
                <NavLink to="/signup" activeclassname="active">
                  <i className="bx bx-user-plus icon"></i>
                  <span className="text nav-text">Sign-up</span>
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
