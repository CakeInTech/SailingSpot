import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../Redux/configureStore";
import Sidebar from "./Sidebar";
import HomePage from "./Homepage";
import Reserve from "./Reserve";
import MyReservations from "./MyReservations";
import AddBoat from "./AddBoat";
import DeleteBoat from "./DeleteBoat";
import Login from './user/Login';
import SignUp from './user/Signup';
import "../scss/app.scss";

export const App = () => {
  return (

    <Provider store={store}>
      <Router>
        <Sidebar />
        <div className='home'>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/reserve" element={<Reserve />} />
              <Route path="/my-reservations" element={<MyReservations />} />
              <Route path="/add-boat" element={<AddBoat />} />
              <Route path="/delete-boat" element={<DeleteBoat />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
      </Router>
    </Provider>
  )
}
