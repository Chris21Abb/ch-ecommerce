import './NavBar.css'
import React from 'react';

import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Collapse } from 'react-bootstrap';

function NavBar() {
        return <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Destro C</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Tienda</Nav.Link>
                        <NavDropdown title="Más" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Accesorios</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Discos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Shows</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Acerca de</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                </>;
}

export default NavBar


