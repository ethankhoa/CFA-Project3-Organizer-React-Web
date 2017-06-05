import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ReactGridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    };
  }


render() {
  var layout = [
    {i: 'a', x: 0, y: 0, w: 1, h: 2},
    {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    {i: 'c', x: 4, y: 0, w: 1, h: 2}
  ];

  return (

    <ReactGridLayout className="layout" layout={layout} cols={10} rowHeight={30} width={1200}>
      <div key={'a'}><h4>Upcoming birthdays</h4></div>
      <div key={'b'}><h4>Upcoming Roster</h4></div>
      <div key={'c'}><h4>Upcoming Events</h4></div>
    </ReactGridLayout>
  )
};
}

export default Dashboard;
