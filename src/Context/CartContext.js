import React, { useContext, useEffect, useState } from "react";
import Context from "./Context";
import AuthContext from "./AuthContext";

const CartContext = (props) => {
  // Extract userId and isLoggedIn from AuthContext
  const { userId, isLoggedIn } = useContext(AuthContext);

  // Initialize cart from localStorage based on the userId
  const [cart, setCart] = useState(() => {
    if (!userId || !isLoggedIn) {
      return [];
    }

    const userCart = localStorage.getItem(`cart_${userId}`);
    return userCart ? JSON.parse(userCart) : [];
  });

  const totalqtyCart = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    // Update localStorage only if userId is available, user is logged in, and cart is not empty
    if (userId && isLoggedIn && cart.length > 0) {
      localStorage.setItem(`cart_${userId}`, JSON.stringify(cart));
    }
  }, [cart, userId, isLoggedIn]);

  const addToCart = (product) => {
    if (!userId || !isLoggedIn) {
      // Handle the case where there is no logged-in user
      return;
    }

    const itemIndex = cart.findIndex((item) => item.id === product.id);

    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // Add the product with the userId
      setCart([...cart, { ...product, quantity: 1, userId }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex((item) => item.id === productId);

    if (itemIndex !== -1) {
      if (updatedCart[itemIndex].quantity > 1) {
        updatedCart[itemIndex].quantity -= 1;
      } else {
        updatedCart.splice(itemIndex, 1);
      }
      setCart(updatedCart);
    }
  };

  return (
    <Context.Provider value={{ cart, addToCart, removeFromCart, totalqtyCart }}>
      {props.children}
    </Context.Provider>
  );
};

export default CartContext;
