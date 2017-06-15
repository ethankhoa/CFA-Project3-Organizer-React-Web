import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Members from './components/Members/Members';
import Calendar from './components/Calendar/Calendar';

// import NotFound from './components/NotFound';

const Routes = (props) => (

  <Switch>
    <Router>
      <Route path='/members' component={Members} />
      <Route path='/calendar' component={Calendar} />

      {/* <Route path="*" component={NotFound} /> */}
    </Router>
  </Switch>

);

export default Routes;
