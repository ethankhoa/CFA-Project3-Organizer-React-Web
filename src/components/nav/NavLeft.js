import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class NavLeft extends Component {
  render() {
    return (
      <div>
        <p>Members</p>
        <Nav navbar vertical color="inverse" inverse toggleable>
          <NavItem>
            <NavLink href="#">Members</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
        <hr />
        <p>Placeholder</p>
        <Nav vertical>
          <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
        </Nav>
      </div>
    );
  }
}

export default NavLeft;
