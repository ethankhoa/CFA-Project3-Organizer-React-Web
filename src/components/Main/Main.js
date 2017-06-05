import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Members from '../Members/Members';
import Calendar from '../Calendar/Calendar';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    };
  }


render() {
  return (
    <div>
      <Switch>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route path='/members' component={Members}/>
        <Route path='/calendar' component={Calendar}/>
      </Switch>

    </div>
  )
};
}

export default Main;
