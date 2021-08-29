import React from 'react'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import  '../styles/HeaderNav.css';

function HeaderNav() {
    return (
        <div className="header">
            <Navbar bg='light' expand='lg' className="header__navbar">
                <Navbar.Brand href="#home" className ="navbar__logo">
                    <img
                        src="https://bosta.co/wp-content/uploads/2019/08/Component.svg"
                        width="163"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Nav className='navbar__nav'>
                    <Nav.Link href="#home" className="navbar__nav__options">Home</Nav.Link>
                    <Nav.Link href="#link" className="navbar__nav__options">Link</Nav.Link>
                    <Nav.Link href="#link" className="navbar__nav__options">other</Nav.Link>
                </Nav>
            </Navbar>

            <Navbar bg='light' expand='lg' className="header__navbar">
                <Nav className='navbar__nav'>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="navbar__nav__options" >
                        <NavDropdown.Item href="#action/3.1">
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="navbar__nav__options" >
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Navbar.Brand href="#home" className ="navbar__logo">en</Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default HeaderNav
