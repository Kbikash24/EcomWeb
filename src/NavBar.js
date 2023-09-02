
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function NavBar() {
  return (
    <Navbar expand="sm" bg="warning" variant="light">
      <Container>
        <Navbar.Brand href="#home" style={{fontWeight:'700'}}>The-Generics</Navbar.Brand>
         <Nav className='custom-nav'> 
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#link">Store</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>  
            </Nav>
            <Button variant="/" className='ml'><ShoppingCartIcon></ShoppingCartIcon></Button>
          
      </Container>
    </Navbar>
  );
}

export default NavBar;