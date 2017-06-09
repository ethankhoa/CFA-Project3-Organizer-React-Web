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
    {i: 'a', x: 0, y: 0, w: 3, h: 10, minW: 5},
    // {i: 'b', x: 1, y: 0, w: 3, h: 10, minW: 5, maxW: 10},
    {i: 'b', x: 1, y: 0, w: 3, h: 10},
    {i: 'c', x: 3, y: 0, w: 3, h: 10}
  ];

  return (

    <ResponsiveReactGridLayout className="layout" layout={layout} cols={10} rowHeight={30} width={1200}>
      <Panel key={'a'}>
        <h4>Upcoming Birthdays</h4>
        <h5>June</h5>
        <ul>
          <li>03/06 - Owen Thomas</li>
          <li>13/06 - Chelsea Bosco</li>
          <li>14/06 - Bob Sakimano</li>
          <li>23/06 - Ned Flanders</li>
        </ul>
        <h5>July</h5>
        <ul>
          <li>02/07 - Josh Walker</li>
          <li>06/07 - Kiara Jacobs</li>
          <li>11/07 - Janick Koep</li>
          <li>15/07 - Emily Corkery</li>
          <li>15/07 - Valerie Swift</li>
          <li>15/07 - Ned Flanders</li>

        </ul>
      </Panel>
      <Panel key={'b'}><h4>Upcoming Roster</h4></Panel>
      <Panel key={'c'}><h4>Upcoming Events</h4></Panel>
    </ResponsiveReactGridLayout>
  )
};
}

export default Dashboard;
