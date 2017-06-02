import React from 'react';
import { Router, Route } from 'react-router';
import App from './components/App/App';
import Members from './components/Members/Members';
// import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/members" component={Members} />
    {/* <Route path="*" component={NotFound} /> */}
  </Router>
);

export default Routes;
