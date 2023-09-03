import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../App.css';
import CloseButton from 'react-bootstrap/CloseButton';

const cartElements = [
  {
    title: 'Colors',
    price: 100,
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    quantity: 1,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    quantity: 1,
  },
];

const Cart = (props) => {
  const total = cartElements.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-overlay">
      <CloseButton onClick={ props.handleCart} style={{marginLeft:'90%',marginTop:'10px'}} />
      <Container className='mt-3 cart-content'>
         <p className='c-title'>Your Cart</p >
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
              {cartElements.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td> <div className="d-flex">
      <Button  variant='/' >-</Button>
     <Button variant='/' >+</Button>
    </div></td>
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
