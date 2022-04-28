import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import camera from '../../../images/camera.png';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth);
  }
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
      {
        user? <Button onClick={handleSignOut} className="signOutBtn" variant="link">Sign Out</Button> 
        :
        <Nav.Link as={Link} to='/login'>
        Login
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        </div>
    );
};

export default Header;