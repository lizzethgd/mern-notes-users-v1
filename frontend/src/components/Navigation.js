import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import reactLogo from '../logo.svg'

export default class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Navbar.Brand href="/">
      <img
        alt=""
        src={reactLogo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      MERN
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="navlink" to="/">Home</NavLink>
          <NavLink className="navlink" to="/about">About</NavLink>
          <NavLink className="navlink" to="/contact">Contact</NavLink>
          <NavLink className="navlink" to="/students">Students</NavLink>
          <NavLink className="navlink" to="/students/add">Add</NavLink>
          <Nav.Link href="http://localhost:3500/api/v.1.0/students">API</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
        )
    }
}
