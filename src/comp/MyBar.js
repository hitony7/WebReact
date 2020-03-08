import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Me from './imgs/me2.png'
/*
Class componment for my nav bar
*/
export class MyBar extends Component {
    render() {
        return (
            <div>
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">
      <img
        src= { Me }
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="my face"
      />
    </Navbar.Brand>
    <Navbar.Brand href="#home">Tony Wong</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="https://github.com/hitony7">Github</Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/tony-wong-33713219a/">Linkedin</Nav.Link>
      <Nav.Link href="#link">Projects</Nav.Link>
      <NavDropdown title="More" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">About me</NavDropdown.Item>
        <NavDropdown.Divider/>
        <NavDropdown.Item href="#action/3.4">Contact me</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Button variant="outline-success">Home</Button>
  </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}

export default MyBar
