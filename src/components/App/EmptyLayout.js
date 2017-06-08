import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import KioskMode from '../Members/KioskMode';


class EmptyLayout extends Component {

  render() {
    return (

      <div>
        <Switch>
          <Route exact path='/kiosk' render={() => (<KioskMode/>)}/>
        </Switch>
      </div>

    );
  }

}
export default EmptyLayout;
