import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import CartContext from "./Context/CartContext";
import ProductView from "./Pages/ProductView";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleCart = () => {
    setShowCart(!showCart);
  };

  async function AddData(formData) {
    try {
      const response = await fetch('https://ecom-652b8-default-rtdb.firebaseio.com/UserData.json', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const Data = await response.json();
      console.log('Data:', Data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <Router>
      <CartContext>
        <NavBar handleCart={handleCart} />
        {showCart && <Cart handleCart={handleCart} />}
     <Switch>
     <Route path="/ProductView/:id" exact component={ProductView}>
           
          </Route>
      <Route path="/" exact><Redirect to={'/home'}></Redirect></Route>
     <Route path="/home">
            <Home />
          </Route>
          <Route path="/store" >
            <Card handleCart={handleCart} />
          </Route>
          
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <ContactUs onSubmit={AddData} />
          </Route>
         
          </Switch>
        <Footer />
      </CartContext>
    </Router>
  );
}

export default App;
