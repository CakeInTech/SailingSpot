import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import HomePage from './Homepage';
import Reserve from './Reserve';
import MyReservations from './MyReservations';
import AddBoat from './AddBoat'
import DeleteBoat from './DeleteBoat';
import Details from './Details';
import Login from './user/Login';
import SignUp from './user/Signup';
import "../scss/app.scss";

const App = () => {
  return (
    <>
        <Sidebar />
        <div className='home'>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/details/:id" element={<Details />}/>
              <Route path="/reserve" element={<Reserve />} />
              <Route path="/my-reservations" element={<MyReservations />} />
              <Route path="/add-boat" element={<AddBoat />} />
              <Route path="/delete-boat" element={<DeleteBoat />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
      </>
  );
};

export default App;
