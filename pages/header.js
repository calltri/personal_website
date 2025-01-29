import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
      <div> 
        <NavBar variant="dark" expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <NavBar.Brand href="#home"> This is my header </NavBar.Brand>
            </Container>
        </NavBar>
      </div>
    );
  }