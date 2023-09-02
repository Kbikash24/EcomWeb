import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import productsArr from "./ProductData";
import "./App.css";
const Cards = () => {
  return (
    <>
      <div
        className="title-al"
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginTop: "26px",
          fontWeight: "900",
        }}
      >
        Music
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "60px" }}>
        {productsArr.map((product, index) => (
          <div
            key={index}
            style={{
              flexBasis: "calc(50% - 40px)",
              margin: "20px",
              boxSizing: "border-box",
            }}
          >
            <Card style={{ width: "18rem", marginLeft: "30%", border: "none" }}>
              <Card.Title style={{ textAlign: "center" }}>
                {product.title}
              </Card.Title>
              <Card.Img
                variant="top"
                src={product.imageUrl}
                className="custom-card zoom-in"
                 
              />
              <Card.Body
                style={{ display: "flex", justifyContent: "space-between",fontSize:'20px',fontWeight:'500'}}
              >
                <Card.Text>₹{product.price}</Card.Text>
                <Button
                  variant="warning"
                  style={{ position: "absolute", left: "180px" }}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>{" "}
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
