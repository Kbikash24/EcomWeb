import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import productsArr from "./ProductData";
import Context from "./Context/Context";
import "./App.css";


const Cards = () => {
  const {addToCart}=useContext(Context)
  return (
    <div className="container">
      <p className="title-al">Music</p>
      <div className="row ">
        {productsArr.map((product, index) => (
          <div key={index} className="col-lg-6 mb-4 " style={{paddingLeft:'65px'}}>
            {/* Add ml-auto for right margin */}
            <Card className="custom-card" style={{ width: "23rem",margin:'20px',padding:'10px'}}>
              <Card.Title className="card-title text-center" style={{margin:'10px'}}>
                {product.title}
              </Card.Title>
              <Card.Img
                variant="top"
                src={product.imageUrl}
                className="card-image zoom-in"
              />
              <Card.Body className="card-body">
                <Card.Text className="card-price" style={{fontSize:'18px',fontWeight:'600'}}>Price:  ${product.price}</Card.Text>
                <Button
                  variant="warning"
                  className="card-button"
                  style={{ width: '100%' }}
                  onClick={()=>addToCart(product)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
