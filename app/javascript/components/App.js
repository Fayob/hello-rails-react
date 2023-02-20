import React from "react";
import { Routes, Route } from "react-router-dom";
import './Greeting'
import Greeting from "./Greeting";

const App = () => {
  return (
    <Routes> 
      {/* <Route path="/" element={<h1>Hello World!</h1>} />   */}
      <Route path="/" element={<Greeting />} />  
    </Routes>
  )
}

export default App;