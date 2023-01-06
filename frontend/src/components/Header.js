import React from 'react';
import Navbar from 'react-bootstrap/esm/Navbar'
import Nav from 'react-bootstrap/esm/Nav'
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import Container from 'react-bootstrap/esm/Container';

export default function Header({title, link1, link2, link3, dropdown, dropdownLink1, dropdownLink2, dropdownLink3 }) {
  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='/welcome'>{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar' />
        <Navbar.Collapse id='responsive-navbar'>
            <Nav className='me-auto'>
                <Nav.Link href='inventory'>{link1}</Nav.Link>
                <Nav.Link href='team'>{link2}</Nav.Link>
                <Nav.Link href='/profile'>{link3}</Nav.Link>
               
                <NavDropdown className='d-flex justify-content-end' title={dropdown} id='responsive-navbar-dropdown'>
                    <NavDropdown.Item>{dropdownLink1}</NavDropdown.Item>
                    <NavDropdown.Item href='add-expense'>{dropdownLink2}</NavDropdown.Item>
                    <NavDropdown.Item href='/edit-profile'>{dropdownLink3}</NavDropdown.Item>                  
                </NavDropdown>            
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
