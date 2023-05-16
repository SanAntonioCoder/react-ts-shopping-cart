import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import MultiDrop from "./MultiDrop";

function ColNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          {" "}
          <Nav.Link to="/" as={NavLink}>
            <img
              src="https://www.freeiconspng.com/uploads/nike-transparent-logos-background-12.png"
              style={{ width: 50, height: 50 }}
            />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="./store" as={NavLink}>
              Store
            </Nav.Link>
            <MultiDrop />

            {/* <NavDropdown
              style={{ paddingLeft: 150 }}
              title="Dropdown"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              style={{ borderRadius: "20px" }}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{ borderRadius: "20px" }} variant="outline-dark">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ColNav;
