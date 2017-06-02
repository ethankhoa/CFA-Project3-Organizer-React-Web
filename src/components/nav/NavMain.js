import React, { Component } from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import FaRocket from 'react-icons/lib/fa/rocket';

class NavMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">
          <FaRocket size={24}/>
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
      </div>
    );
  }
}

export default NavMain;
