import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header() {
    return (
      <div> 
        <NavBar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <NavBar.Brand href="#home"> This is my header image </NavBar.Brand>
                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="projects">Projects</Nav.Link>
                        <Nav.Link href="papers">Papers</Nav.Link>
                    </Nav>
                </NavBar.Collapse>
            </Container>
        </NavBar>
      </div>
    );
  }