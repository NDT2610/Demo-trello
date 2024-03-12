import React, { useState, } from 'react'
import { Navigate } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap';

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const Submit = async (e) => {
  e.preventDefault()
   await fetch('http://localhost:8000/api/register', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": 'application/json' ,
        'Access-Control-Allow-Origin': '*',}
  })
  setRedirect(true);
}
if (redirect){
  return <Navigate to="/Login" />
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
            <Nav.Link href="/Login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <form onSubmit={Submit}>
      <div>
        <input type="text" className="form-control" placeholder="Username" required
          onChange={(e) => setUsername(e.target.value)} />

        <br/>
        <input type="password" className="form-control" placeholder="Password" required
          onChange={(e) => setPassword(e.target.value)} />

        <br/>
        <button className='w-100 btn btn-lg btn-primary' type='submit'>Register</button>

        <br />
      </div>
    </form>
    </>
  
    
  )
}

export default Register