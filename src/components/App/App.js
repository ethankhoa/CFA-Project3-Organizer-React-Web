import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { Col } from 'react-bootstrap';
// import NavMain from '../Nav/NavMain';
// import NavLeft from '../Nav/NavLeft';
// import Main from '../Main/Main';
import MainLayout from './MainLayout';
// import EmptyLayout from './EmptyLayout';
// import Dashboard from '../Dashboard/Dashboard';
// import Members from '../Members/Members';
// import Calendar from '../Calendar/Calendar';
// import AddMember from '../Members/AddMember';
import KioskMode from '../Members/KioskMode';
// import ViewMember from '../Members/ViewMember';
import NotFound from './NotFound';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    }
  };

  render() {
    return (
      <div>
        <Switch>
          <Route path="/app" component={MainLayout}/>
          <Route exact path="/kiosk" component={KioskMode}/>
          <Redirect exact path="/" to="app"/>
          <Route component={NotFound} />


          {/* <Route exact path='/kiosk' render={() => (<KioskMode/>)}/> */}

        </Switch>
      </div>


    );
  }
}

export default App;
