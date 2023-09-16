import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import Context from "../Context/Context";
import AuthContext from "../Context/AuthContext";

const NavBar = (props) => {
  const { totalqtyCart, } = useContext(Context);
  const AuthCtx=useContext(AuthContext)
  const logoutHandler=()=>{
    AuthCtx.logout()
  }

  return (
    <Navbar expand="sm" bg="warning" variant="light" className="navbar">
      <Container>
        <Navbar.Brand href="#home" style={{ fontWeight: "700" }}>
          The-Generics
        </Navbar.Brand>
        <Nav className="custom-nav">
          <Nav.Link href="http://localhost:3000/home">Home</Nav.Link>
          <Nav.Link href="http://localhost:3000/store">Store</Nav.Link>
          <Nav.Link href="http://localhost:3000/About">About</Nav.Link>
          {AuthCtx.isLoggedIn ? (
            <Button variant="/"  onClick={logoutHandler} style={{border:'none'}}>
              Logout
            </Button>
          ) : (
            <Nav.Link href="http://localhost:3000/Login">Login</Nav.Link>
          )}
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
