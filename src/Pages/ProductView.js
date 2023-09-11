import React from "react";
import  { useContext } from "react";
import { useParams } from "react-router-dom"; // Import useParams to access route parameters
import productsArr from "../Components/ProductData";
import "./ProductView.css";
import Button from "react-bootstrap/Button";
import Context from "../Context/Context";

const ProductView = () => {
  const {id} = useParams(); // Get the productId from the route parameter
  const product = productsArr.find((item) => item.id === parseInt(id));
  const { addToCart } = useContext(Context);

  if (!product) {
    // Handle the case where the product is not found
    return <div>Product not found</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-4" style={{ paddingLeft: "65px" }}>
          <h1>{product.title}</h1>
          <img src={product.imageUrl} alt={product.title} className="product-image" />
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <Button variant='warning' onClick={() => addToCart(product)}>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
