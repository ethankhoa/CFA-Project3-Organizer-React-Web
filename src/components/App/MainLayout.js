import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import KioskMode from '../Members/KioskMode';

import { Col } from 'react-bootstrap';
import NavMain from '../Nav/NavMain';
import NavLeft from '../Nav/NavLeft';
import Main from '../Main/Main';
import EmptyLayout from './EmptyLayout';
import './App.css';

class MainLayout extends Component {

  render() {
    return (
      <div>
        {/* <Switch>
          <Route exact path='/kiosk' render={() => (<KioskMode/>)}/>
        </Switch> */}
          <NavMain />
            <Col xs={6} md={2}>
              <NavLeft />
            </Col>
            <Col xs={12} md={10}>
              <Main />
            </Col>

      {/* <div>
        <EmptyLayout />
      </div> */}
      </div>
    );
  }

}
export default MainLayout;
