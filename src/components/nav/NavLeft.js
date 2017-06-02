import React, { Component } from 'react';
// import { Nav, NavItem, NavLink } from 'reactstrap';
import FaUsers from 'react-icons/lib/fa/group';
import FaCalendar from 'react-icons/lib/fa/calendar';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';
import Members from '../Members/Members';
import Calendar from '../Calendar/Calendar';


class NavLeft extends Component {
  render() {
    return (
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="clearfix">
              <Col sm={4}>
                <Nav bsStyle="pills" stacked>
                  <NavItem eventKey="first">
                    <FaUsers size={30}/>
                    <p>Members</p>
                  </NavItem>
                  <NavItem eventKey="second">
                    <FaCalendar size={30}/>
                    <p>Calendar</p>
                  </NavItem>
                </Nav>
              </Col>
              <Col sm={8}>
                <Tab.Content animation>
                  <Tab.Pane eventKey="first">
                  <Members />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Calendar />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
    );
  }
}

export default NavLeft;
