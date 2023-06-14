import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './comp/Header';
import Main from './comp/Main';
import Product from './comp/Product';
import Product2 from './comp/Product2';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:pid" element={<Product />} />
          {/* <Route path="/product2" element={<Product2 />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;