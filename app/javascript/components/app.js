import React from "react";
import { Route, Routes } from 'react-router-dom'
import Homepage from "./Homepage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/reservation" element={<Homepage />} />
    </Routes>
  )
}

export default App;
