// import { Button } from 'bootstrap';
import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './NavBar.css'

function NavBar() {
    return (
        <div>
<Navbar collapseOnSelect className="nav py-4 navbar-expand-sm navbar-custom" expand="lg" bg="light"  >
  <Navbar.Brand class="nav__brand" href="#home">
    <img src="logo.png" className="nav__brandImg" height="55" alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse  id="responsive-navbar-nav">
    <Nav className="mr-auto">
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Nav.Link  href="/">
        <center className="nav__items">Home</center>
        </Nav.Link>
      <Nav.Link href="/gallery">
        	<p className="nav__items">Gallery</p>
      </Nav.Link>
      <Nav.Link href="#memes">
        <p className="/bio">Bio</p>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

        </div>
    )
}

export default NavBar
