import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavBar extends Component {
    render() {
        return (
            <Navbar variant="dark" bg="dark" expand="lg">
                <Navbar.Brand href="/home">Your Name Here</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/whatWeDo"> WhatWeDo</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}