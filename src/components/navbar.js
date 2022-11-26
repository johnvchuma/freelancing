import { Container, Navbar, Button, Stack, Nav, Image } from "react-bootstrap";
import React from "react";

const NavigationBar = () => {
  return (
    <div>
      <Container>
        <Navbar
          className="py-4"
          expand="lg"
          style={{ backgroundColor: "white" }}
          variant="light"
        >
          <Navbar.Brand
            className="text-weight-bold display-1 "
            style={{ fontWeight: 750, fontSize: 30 }}
          >
            <Stack className="d-flex align-items-end" direction="horizontal">
              <div>JChuma</div>
              <div
                className=" ms-1"
                style={{
                  height: "7px",
                  marginBottom: "5px",
                  width: "7px",
                  borderRadius: 20,
                  backgroundColor: "#fe481c"
                }}
              ></div>
            </Stack>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                style={{
                  fontWeight: 650,
                  color: "#000000",
                  fontSize: 15
                }}
                href="#home"
                className="me-2"
              >
                Home
              </Nav.Link>
              <Nav.Link
                style={{
                  fontWeight: 600,
                  color: "#000000",
                  fontSize: 15
                }}
                href="#link"
                className="me-2"
              >
                About
              </Nav.Link>
              <Nav.Link
                style={{
                  fontWeight: 600,
                  color: "#000000",
                  fontSize: 15
                }}
                href="#link"
                className="me-2"
              >
                Projects
              </Nav.Link>
              <Nav.Link
                style={{
                  fontWeight: 600,
                  color: "#000000",
                  fontSize: 15
                }}
                href="#link"
                className="me-2"
              >
                Works
              </Nav.Link>
              <Nav.Link
                style={{
                  fontWeight: 600,
                  color: "#000000",
                  fontSize: 15
                }}
                href="#link"
              >
                Services
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Button
                className="py-2 px-5"
                style={{
                  borderRadius: 0,
                  fontWeight: 650,
                  fontSize: 15,
                  backgroundColor: "white",
                  color: "black",
                  border: "2px solid #00000070"
                }}
              >
                Hire Me
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Stack>
          <div style={{ backgroundColor: "#00000010", height: "2px" }}></div>
        </Stack>
      </Container>
    </div>
  );
};

export default NavigationBar;
