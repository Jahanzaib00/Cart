import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Products from "./Products";
import { ProductDetail } from "./ProductDetail";
import { Cart } from "./Cart";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route
            path="*"
            element={<h1 className="text-center">Error 404</h1>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
