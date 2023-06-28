import React from "react";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from "./Home";
import "./style.css";
import Contact from "./Contact";
import Time from "./Time";


const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='time' element={<Time />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
};

export default App;
