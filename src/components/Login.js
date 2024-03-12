import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../styles/Login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8000/api/Login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (response.ok) {
        setRedirect(true);
      } else {
        const data = await response.json();
        throw new Error(data.message || 'Login failed');
      }
    } catch (error) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (redirect) {
    return <Navigate to="/Home" />;
  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Trello</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Add your navigation links here */}
          </Nav>
          <Nav>
            {/* Add a logout button here */}
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='login-form-container"'>
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </button>

        {error && <div className="text-danger">{error}</div>}
      </div>
    </form>
    </div>
      
    </>

    
  );
}

export default Login;
