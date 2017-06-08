import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Route } from 'react-router-dom';


class KioskMode extends Component {

  render() {
    return(
      <div>
        <h2>KIOSK MODE!!!!!!!</h2>
        <p>fuck no buttons please shit</p>
        <Button href="/app/dashboard">Exit Kiosk Mode </Button>


      </div>


    )
  }
};

export default KioskMode;
