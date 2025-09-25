import { Container, Navbar, Nav, Button } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light" className="py-3">
      <Container>
        <Navbar.Brand href="#">BrandName</Navbar.Brand>

        {/* Toggler for mobile */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Collapsible content */}
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="me-auto">
            <Nav.Link href="#opportunities">Opportunities</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
          </Nav>

          <div className="d-flex gap-2">
            <Button variant="outline-primary">Login</Button>
            <Button variant="primary">Signup</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
