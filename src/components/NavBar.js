import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import "../styles/NavBar.css";

function NavBar() {
  const [redirect, setRedirect] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:8000/api/Logout', {
        method: 'POST',
        credentials: 'include',
      });

      document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

      setRedirect(true);
    } catch (error) {
      console.error('Logout failed:', error); 
    }
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Trello</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
