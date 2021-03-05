import React, {Component} from 'react';
import {Nav, Navbar} from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">TaxI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar>Uname</Navbar>
                <Navbar>@mail</Navbar>
            </Navbar>
        );
    }
}


export default Header;