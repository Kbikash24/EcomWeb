import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import Footer from './Footer';
import Cart from './Components/Cart'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from './Context/CartContext';

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <> <CartContext>
      <NavBar handleCart={handleCart} />
      {showCart && <Cart  handleCart={handleCart}/>}
      <Card  />
      <Footer  handleCart={handleCart} />
      </CartContext>
    </>
  );
}

export default App;
