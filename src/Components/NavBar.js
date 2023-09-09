import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../App.css";
import { useContext } from "react";
import Context from "../Context/Context";

const NavBar = (props) => {
  const { totalqtyCart } = useContext(Context);

  return (
    <Navbar expand="sm" bg="warning" variant="light" className="navbar" >
      <Container>
        <Navbar.Brand href="#home" style={{ fontWeight: "700" }}>
          The-Generics
        </Navbar.Brand>
        <Nav className="custom-nav">
          <Nav.Link href="http://localhost:3000/home">Home</Nav.Link>
          <Nav.Link href="http://localhost:3000/">Store</Nav.Link>
          <Nav.Link href="http://localhost:3000/About">About</Nav.Link>
          <Nav.Link href="http://localhost:3000/contact">Contact Us</Nav.Link>

        </Nav>
        <Button variant="/" className="ml" onClick={props.handleCart}>
          <ShoppingCartIcon></ShoppingCartIcon>{" "}
          <span className="cart-item-count">{totalqtyCart}</span>{" "}
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar; 
