import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarX = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="gray" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <span className="font-face-gm" style={{ fontSize: "1.5rem" }}>
              JITHack
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link eventKey={1} href="#deets">
                About
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Stories
              </Nav.Link>
              <Nav.Link eventKey={3} href="#memes">
                Sponsors
              </Nav.Link>
              <Nav.Link eventKey={4} href="#memes">
                FAQ
              </Nav.Link>
              <Nav.Link eventKey={5} href="#memes">
                Team
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarX;
