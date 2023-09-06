import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import About from "./Pages/About";
import Home from "./Pages/Home";

import CartContext from "./Context/CartContext";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <Router>
      <CartContext>
        <NavBar handleCart={handleCart} />
        {showCart && <Cart handleCart={handleCart} />}
        <Routes>
          <Route path="/" element={<Card handleCart={handleCart}/>} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
        </Routes>
        <Footer  />
      </CartContext>
    </Router>
  );
}

export default App;
