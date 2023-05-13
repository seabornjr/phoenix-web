import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Navigator() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Rising Phoenix</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">

          <LinkContainer to="/">
          <Nav.Link ></Nav.Link>
          </LinkContainer>

          <LinkContainer to="/Dashboard">
          <Nav.Link >Dashboard</Nav.Link>
          </LinkContainer>
          
          <LinkContainer to="/Register">
          <Nav.Link >Register</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigator
