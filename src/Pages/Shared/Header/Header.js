import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import camera from '../../../images/camera.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="nav-area">
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='/'>
      <img className='logo-header' src={camera} />
      Moment Studio</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="#features">Services</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#pricing">Blogs</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to='/login'>
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        </div>
    );
};

export default Header;