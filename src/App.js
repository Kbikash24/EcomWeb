import React, { useState,useContext } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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
import LoginPage from "./Components/Login/LoginPage";
import AuthContext from "./Context/AuthContext";

function App() {
 
  const [showCart, setShowCart] = useState(false);
const AuthCtx=useContext(AuthContext)
console.log(AuthCtx.isLoggedIn)
  const handleCart = () => {
    setShowCart(!showCart);
  };

  async function AddData(formData) {
    try {
      const response = await fetch(
        "https://ecom-652b8-default-rtdb.firebaseio.com/UserData.json",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const Data = await response.json();
      console.log("Data:", Data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <Router>
      
      <CartContext>
        <NavBar handleCart={handleCart} />
        {showCart && <Cart handleCart={handleCart} />}
        <Routes>
        <Route
            path="/"
            element={
              AuthCtx.isLoggedIn ? (
                <Navigate to="/home" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          
          <Route path="/ProductView/:id" element={<ProductView />} />
          <Route path="/home" element={<Home />} />
           <Route path="/store" element={AuthCtx.isLoggedIn?<Card handleCart={handleCart}/> :<Navigate to={"/login"}/> } /> 
         <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs onSubmit={AddData} />} />
      
        </Routes>

        <Footer />
      </CartContext>
      
    </Router>
  );
}

export default App;
