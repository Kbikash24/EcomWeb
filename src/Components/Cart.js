import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../App.css";
import CloseButton from "react-bootstrap/CloseButton";
import { MdDelete } from "react-icons/md";
import Context from "../Context/Context";

const Cart = (props) => {
  
  const { cart, removeFromCart } = useContext(Context); // Access cart state and removeFromCart function from the context
  
  
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="cart-overlay">
      <CloseButton
        onClick={props.handleCart}
        style={{ marginLeft: "90%", marginTop: "10px" }}
      />
      <Container className="mt-3 cart-content">
        <p className="c-title">Your Cart</p>
        <Card>
          <Table responsive>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img className="cart-img" src={item.imageUrl} alt="/" />
                      <span style={{ marginLeft: "10px" }}>{item.title}</span>
                    </div>
                  </td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>
                    <Button
                      className="mb-2"
                      variant="/"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <MdDelete className="btn-remove" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Card.Footer>
            <div className="d-flex justify-content-between">
              
              <p>Total: ${total}</p>
              <Button variant="warning">Order</Button>
            </div>
           
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default Cart;
