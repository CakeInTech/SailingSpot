import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './user/Login';
import Signup from './user/Signup';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Welcome from './welcome';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
