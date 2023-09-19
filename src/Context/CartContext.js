import React, { useContext, useEffect, useState } from "react";
import Context from "./Context";
import AuthContext from "./AuthContext";

const CartContext = (props) => {
  // Extract userId and isLoggedIn from AuthContext
  const { userId, isLoggedIn } = useContext(AuthContext);

  // Initialize cart from state
  const [cart, setCart] = useState([]);

  const totalqtyCart = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const fetchCartData = async () => {
      if (userId && isLoggedIn) {
        try {
          const response = await fetch(
            `https://ecommerce-c7aa1-default-rtdb.firebaseio.com/carts/${userId}.json`
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();

          if (data) {
            setCart(data);
          }
        } catch (error) {
          console.error("Error fetching cart data:", error);
        }
      }
    };

    fetchCartData();
  }, [userId, isLoggedIn]);

  useEffect(() => {
    const updateCartData = async () => {
      if (userId && isLoggedIn) {
        try {
          const response = await fetch(
            `https://ecommerce-c7aa1-default-rtdb.firebaseio.com/carts/${userId}.json`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(cart),
            }
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
        } catch (error) {
          console.error("Error updating cart data:", error);
        }
      }
    };

    updateCartData();
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
      // Add the product to the cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          return null; // Remove the item from the cart
        }
      }
      return item;
    }).filter(Boolean); // Filter out null items
    setCart(updatedCart);
  };

  return (
    <Context.Provider value={{ cart, addToCart, removeFromCart, totalqtyCart }}>
      {props.children}
    </Context.Provider>
  );
};

export default CartContext;