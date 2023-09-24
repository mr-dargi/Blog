import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// Navbar Section Using React Bootstarp
export default function NavBar() {
  return (
    <Navbar expand="md" className="NavBar navbar-inverse bg-body-white">
      <Container fluid>
        {/* ------------------------------------------
         Toggle bar button collapsible menu for phone 
        ------------------------------------------ */}
        <Navbar.Toggle aria-controls="navbarScroll start" />

        {/* ------------------------------------------
         Menu that is collapsible for phone 
        ------------------------------------------ */}
        <Navbar.Collapse id="navbarScroll" className="justify-content-start">
          <Nav className="bg-body-white">
            <Nav.Link as={Link} to="/">وبلاگ</Nav.Link>
            <Nav.Link as={Link} to="/about">درباره ما</Nav.Link>
            <Nav.Link as={Link} to="/contact">ارتباط با ما</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand as={Link} to="/" className="brand d-flex justify-content-center col-lg-4">DailyBits</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/login">ورودی | ثبت نام</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    
  );
}
