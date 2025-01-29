import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
      <div> 
        <NavBar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavBar.Brand> This is my header </NavBar.Brand>
            </Container>
        </NavBar>
      </div>
    );
  }