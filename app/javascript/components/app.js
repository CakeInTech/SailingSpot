import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Welcome from './welcome';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path="/welcome" element={<Welcome/>} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
