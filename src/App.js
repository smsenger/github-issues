import React from 'react';
import IssueList from './components/IssueList';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'

import './App.css';

function App() {

  return (
    <div>
{/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> */}

      <div className="App-header">
        <h1 className="git-title">facebook / create-react-app</h1>
        <div className="header-options">
          <p className="header-option">Code</p>
          <p className="header-option">Issues</p>
          <p className="header-option">Pull Requests</p>
          <p className="header-option">Discussions</p>
          <p className="header-option">Projects</p>
          <p className="header-option">Actions</p>
          <p className="header-option">Security</p>
          <p className="header-option">Pulse</p>
          <p className="header-option">Community</p>
          </div>
      </div>
      <div className="contribute">
        <p className="contribute-body">
          👋<b>Want to contribute to facebook/create-react-app?</b><br></br>
          If you have a bug or an idea, read the contributing guidelines before opening an issue.
          If you're ready to tackle some open issues, we've collected some good first issues for you.
        </p>
      </div>
      <div className="dropdowns-div">
        <div className="dropdown-div">
          <DropdownButton className="dropdownButton" id="dropdown-basic-button" title="Author">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="dropdown-div">
          <DropdownButton className="dropdownButton" id="dropdown-basic-button" title="Label">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className="App">
        <IssueList />
      </div>
    </div>
  );
}

export default App;
