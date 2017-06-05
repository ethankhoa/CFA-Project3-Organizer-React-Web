import React, { Component } from 'react';
import FaUsers from 'react-icons/lib/fa/group';
import FaCalendar from 'react-icons/lib/fa/calendar';
import FaDashboard from 'react-icons/lib/fa/dashboard';
import { withRR4, Nav, NavText, NavIcon } from 'react-sidenav';
import { Link } from 'react-router-dom';

const SideNav = withRR4();


class NavLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: 1
    }
    this.handleSelect = this.handleSelect.bind(this)

  };

  handleSelect(selectedKey) {
    // alert('selected ' + selectedKey);
    this.setState({ selectedKey });
  };

  render() {
    return (
      <div style={{background: '#232a2f', color: '#FFF', width: 220}}>
        <SideNav default='dashboard' highlightBgColor='gray' highlightColor='white'>
          <Nav id='dashboard'>
            <NavIcon><FaDashboard size={20} /></NavIcon>

            <NavText>  Dashboard </NavText>
          </Nav>
          <Nav id='members'>
            <NavIcon><FaUsers size={20}/></NavIcon>
            <NavText> Members </NavText>
          </Nav>
          <Nav id='calendar'>
            <NavIcon><FaCalendar size={20} /></NavIcon>
              <NavText>  Calendar </NavText>
          </Nav>
        </SideNav>
      </div>
    );
  }
}

export default NavLeft;
