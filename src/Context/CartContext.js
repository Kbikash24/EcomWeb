
import React,{useState} from 'react'
import Context from './Context'

 
 const CartContext = (props) => {
    const [cart, setCart] = useState([]);
    const totalqtyCart = cart.reduce((total, item) => total + item.quantity, 0);

    const addToCart = (product) => {
      const itemIndex = cart.findIndex((item) => item.id === product.id);
  
      if (itemIndex !== -1) {
        // If the product is already in the cart, update its quantity
        const updatedCart = [...cart];
        updatedCart[itemIndex].quantity += 1;
        setCart(updatedCart);
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    };
    const removeFromCart = (productId) => {
      const updatedCart = [...cart];
      const itemIndex = updatedCart.findIndex((item) => item.id === productId);
  
      if (itemIndex !== -1) {
        // If the product is in the cart, decrement its quantity
        if (updatedCart[itemIndex].quantity > 1) {
          updatedCart[itemIndex].quantity -= 1;
        } else {
          // If the quantity is 1, remove the item from the cart
          updatedCart.splice(itemIndex, 1);
        }
        setCart(updatedCart);
      }
    };
  
   return (
     <Context.Provider value={{cart,addToCart,removeFromCart,totalqtyCart}}>
        {props.children}
     </Context.Provider>
   )
 }
 
 export default CartContext
