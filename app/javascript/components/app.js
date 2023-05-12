import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../Redux/configureStore";
import Sidebar from "./Sidebar";
import HomePage from "../pages/Homepage";
import Reserve from "../pages/Reserve";
import MyReservations from "../pages/MyReservations";
import AddBoat from "../pages/AddBoat";
import DeleteBoat from "../pages/DeleteBoat";

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/my-reservations" element={<MyReservations />} />
            <Route path="/add-boat" element={<AddBoat />} />
            <Route path="/delete-boat" element={<DeleteBoat />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}
