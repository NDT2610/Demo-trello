import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/NavBar.css"

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Trello</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default BasicExample;