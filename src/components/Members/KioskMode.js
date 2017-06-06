import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class KioskMode extends Component {

  render() {
    return(
      <div>
        <h2>KIOSK MODE!!!!!!!</h2>
        <Button href="/dashboard">Exit Kiosk Mode </Button>

      </div>


    )
  }
};

export default KioskMode;
