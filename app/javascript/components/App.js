import React from "react";
import { Route, Routes } from 'react-router-dom'
import Homepage from "./Homepage";

const App = () => {
  return (
   <div className="container-fluid px-0">
     <div className="row">
      <div className="col-2">
        {/* Sidebar Component */}
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
     </div>
   </div>
  )
}

export default App;
