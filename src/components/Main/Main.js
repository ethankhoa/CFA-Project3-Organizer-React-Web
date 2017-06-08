import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Members from '../Members/Members';
import Calendar from '../Calendar/Calendar';
import AddMember from '../Members/AddMember';
import ViewMember from '../Members/ViewMember';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    };
  }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/app/dashboard' component={Dashboard}/>
          <Route exact path='/app/members' component={Members}/>
          <Route exact path='/app/members/addmember' component={AddMember}/>
          <Route exact path='/app/members/:id' component={ViewMember}/>
          <Route path='/app/calendar' component={Calendar}/>
        </Switch>
      </div>
    )
  };

}

export default Main;
