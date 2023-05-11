import React from "react";
import { Route, Routes } from 'react-router-dom'
import Homepage from "./Homepage";
// import Navbar from "./Navbar";
import "../scss/app.scss";

const App = () => {
  return (
   <div className="container-fluid px-0">
     <div className="">
        {/* <Navbar /> */}
        <div className="home">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
     </div>
   </div>
  )
}

export default App;
