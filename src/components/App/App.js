import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from './MainLayout';
import KioskMode from '../Members/KioskMode';
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
