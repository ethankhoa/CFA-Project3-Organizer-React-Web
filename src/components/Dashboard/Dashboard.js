import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import ResponsiveReactGridLayout from 'react-grid-layout';
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
  let layout = [
    {i: 'a', x: 0, y: 0, w: 3, h: 10},
    // {i: 'b', x: 1, y: 0, w: 3, h: 10, minW: 5, maxW: 10},
    {i: 'b', x: 1, y: 0, w: 3, h: 10},
    {i: 'c', x: 3, y: 0, w: 3, h: 10}
  ];

  return (

    <ResponsiveReactGridLayout className="layout" layout={layout} cols={10} rowHeight={30} width={1200}>
      <Panel key={'a'}><h4>Upcoming birthdays</h4></Panel>
      <Panel key={'b'}><h4>Upcoming Roster</h4></Panel>
      <Panel key={'c'}><h4>Upcoming Events</h4></Panel>
    </ResponsiveReactGridLayout>
  )
};
}

export default Dashboard;
