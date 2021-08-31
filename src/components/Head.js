// import { useState, useEffect } from 'react';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';
import  '../styles/Head.css';
import {Redirect, useHistory} from 'react-router-dom'

function Head(props) {

    const {Numbers, handleSelect} = props

    const handleTracking = (e) => {

        handleSelect(e)
        return <Redirect to='/track/{e}'/>
    }

    return (
        <div className='header'>
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
                    <Nav.Link href="#home" className="navbar__nav__options">الصفحة الرئيسية</Nav.Link>
                    <Nav.Link href="#link" className="navbar__nav__options">الأسعار</Nav.Link>
                    <Nav.Link href="#link" className="navbar__nav__options">المبيعات</Nav.Link>
                </Nav>
            </Navbar>

            <Navbar bg='light' expand='lg' className="header__navbar">
                <Nav className='navbar__nav'>
                    <NavDropdown title="تتبع شحنتك" id="basic-nav-dropdown" className="navbar__nav__options" >
                        {Numbers && Numbers.map((Number)=>(
                            <NavDropdown.Item  
                                onSelect={(e)=>handleTracking(e)}
                                key={Number}
                                href={`/${Number}`}
                            >
                                {Number}
                            </NavDropdown.Item>))}
                    </NavDropdown>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Head
