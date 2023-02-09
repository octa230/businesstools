import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/esm/Navbar'
import Nav from 'react-bootstrap/esm/Nav'
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import { Store } from '../Store';
import Search from './Search';

export default function Header({title, link1, link2, link3, link4, link5, dropdown, dropdownLink1, dropdownLink2, dropdownLink3 }){

  const {state, dispatch: ctxDispatch} = useContext(Store)
  const {userToken} = state

  function signOutHandler(){
    ctxDispatch({type: 'SIGN_OUT'})
    localStorage.clear('userToken');
    window.location.href='/' 
  }

  return (
   
    <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='/welcome'>{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar' />
        <Navbar.Collapse id='responsive-navbar'>
            <Nav className='me-auto d-flex navbar'>
                <Nav.Link href='/inventory'>{link1}</Nav.Link>
                <Nav.Link href='/team'>{link2}</Nav.Link>
                <Nav.Link href='/profile'>{link3}</Nav.Link>
                <Nav.Link href='/create-product'>{link4}</Nav.Link>
                <Nav.Link href='/signup'>{link5}</Nav.Link>
               
                <NavDropdown className='d-flex justify-content-end' title={dropdown} 
                id='responsive-navbar-dropdown'>
                    <NavDropdown.Item onClick={signOutHandler}>{dropdownLink1}</NavDropdown.Item>
                    <NavDropdown.Item href='/add-expense'>{dropdownLink2}</NavDropdown.Item>
                    <NavDropdown.Item href='/edit-profile'>{dropdownLink3}</NavDropdown.Item>                  
                </NavDropdown>
                <Search />            
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
