import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Me from './imgs/me2.png'
import gitLogo from './imgs/githubLogo.png'
import linkLogo from './imgs/linkdphoto.png'
import { Link  } from 'react-router-dom'
/*
Class componment for my nav bar
*/


export class MyBar extends Component {
  //Construct need to bind this nav bar functions to this instance of the bar 
  constructor(props) {
    super(props);
    this.linkndOnClick = this.linkndOnClick.bind(this);
    this.gitOnClick = this.gitOnClick.bind(this);
  }

  linkndOnClick = () => {
    console.log('this is:', this);
    window.location = "https://www.linkedin.com/in/tony-wong-33713219a/"
  }

  gitOnClick = () => {
    console.log('this is:', this);
    window.location = "https://github.com/hitony7"
  }

    render() {
        return (
            <div>
  <Navbar className="navbar navbar-light"  expand="lg"  >
  <Link to="/">
  <Navbar.Brand href="#home">
      <img
        src= { Me }
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="my face"
      />
    </Navbar.Brand>
    </Link>
    <Link to="/">
    <Navbar.Brand href="#home">Tony Wong</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/projects">
      <Nav.Link href="#link">Projects</Nav.Link>
      </Link>
      <Link to="/contactme">
      <Nav.Link href="#link">Contact Me</Nav.Link>
      </Link>
      <NavDropdown title="More" id="basic-nav-dropdown">
        <NavDropdown.Item href="https://medium.com/@tywong11">Blog</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">About me</NavDropdown.Item>
        <NavDropdown.Divider/>
        <NavDropdown.Item href="#action/3.4">WIP</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Button variant="light" onClick ={ this.gitOnClick } >
    <img
        src= { gitLogo }
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="my face"
        href="https://github.com/hitony7"
      />
    </Button>
    <Button variant="light" onClick ={ this.linkndOnClick }>
    <img
        src= {linkLogo }
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="my face"
        href="https://www.linkedin.com/in/tony-wong-33713219a/"
                  />
    </Button>
  </Navbar.Collapse>
  </Navbar>
            </div>
        )
    }
}

export default MyBar
