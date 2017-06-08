import React, { Component } from 'react';
import FaUsers from 'react-icons/lib/fa/group';
import FaBullhorn from 'react-icons/lib/fa/bullhorn';
import FaDashboard from 'react-icons/lib/fa/dashboard';
import FaUserPlus from 'react-icons/lib/fa/user-plus';
import { withRR4, Nav, NavText, NavIcon } from 'react-sidenav';

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
        <SideNav highlightBgColor='gray' highlightColor='white'>
          <Nav id='dashboard'>
            <NavIcon><FaDashboard size={20} /></NavIcon>

            <NavText>  Dashboard </NavText>
          </Nav>
          <Nav id='members'>
            <NavIcon><FaUsers size={20}/></NavIcon>
            <NavText> Members </NavText>
            {/* <Nav id='viewmembers'>
              <NavIcon><FaUserPlus size={20}/></NavIcon>
              <NavText> View Members </NavText>
            </Nav> */}
            <Nav id='addmember'>
              <NavIcon><FaUserPlus size={20}/></NavIcon>
              <NavText> Add Member </NavText>
            </Nav>
          </Nav>
          <Nav id='calendar'>
            <NavIcon><FaBullhorn size={20} /></NavIcon>
              <NavText>  Announcements </NavText>
          </Nav>
        </SideNav>
      </div>
    );
  }
}

export default NavLeft;
