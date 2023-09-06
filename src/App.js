import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import Card from "./Card";
import Footer from "./Footer";
import Cart from "./Components/Cart";
import About from "./About"; // Import the About component.

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
          <Route path="/about" element={<About />} /> 
        </Routes>
        <Footer  />
      </CartContext>
    </Router>
  );
}

export default App;
