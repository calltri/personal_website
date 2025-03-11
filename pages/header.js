import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header() {
    return (
      <div> 
        <NavBar expand="md" className="bg-primary"  >
            <Container class="ms-3">
                <NavBar.Brand href="#home" className="text-white "> <div>Insert img</div> Madison W. Call </NavBar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav" />
                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home" className="text-white">Home</Nav.Link>
                        <Nav.Link href="about" className="text-white">About</Nav.Link>
                        <Nav.Link href="projects" className="text-white">Projects</Nav.Link>
                        <Nav.Link href="papers" className="text-white">Papers</Nav.Link>
                    </Nav>
                </NavBar.Collapse>
            </Container>
        </NavBar>
      </div>
    );
  }