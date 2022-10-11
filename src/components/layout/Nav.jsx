import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Navigate() {
  const [auth, setAuth] = useContext(AuthContext);

  let navigate = useNavigate();
  function logOut() {
    setAuth(null);
    navigate("/");
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="text-uppercase">Course Assignment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} className="text-uppercase fw-b" to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} className="text-uppercase" to="/contact">
              Contact
            </Nav.Link>
            {auth ? (
              <button onClick={logOut}>Log out</button>
            ) : (
              <Nav.Link as={NavLink} className="text-uppercase" to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigate;
