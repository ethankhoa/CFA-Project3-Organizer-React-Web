import React, { Component } from 'react';
import {
  Grid,
  Button,
  Form,
  FormGroup,
  FormControl,
  Checkbox,
  Panel,
  ControlLabel
}
from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Email from 'react-email-autocomplete';

class KioskMode extends Component {

  render() {

    const panelTitle = (
      <h4>SIGN UP FOR SHIT</h4>
    )

    const panelFooter = (
      <div>
      <Button bsSize="large">Cancel this shit man!</Button>
      {` `}
      <Button bsSize="large" bsStyle="success">Send it dude!</Button>
      </div>
    )

    return (
      <div>
        <Grid>
        <h2>KIOSK MODE!!!!!!!</h2>
        <p>fuck no buttons please shit</p>
        <Button href="/app/dashboard">Exit Kiosk Mode
        </Button>
        {` `}

        <h3>SIGN UP FOR SHIT</h3>

        <Panel bsStyle="info" footer={panelFooter}>
        {` `}
        <Form>
          <FormGroup inline bsSize="large">
            <ControlLabel>First Name</ControlLabel>
            <FormControl type="text" placeholder="Large text"/>
          </FormGroup>
          <FormGroup inline bsSize="large">
            <ControlLabel>Last Name</ControlLabel>
            <FormControl type="text" placeholder="Large text"/>
          </FormGroup>
          <FormGroup>
          <label htmlFor="eac-input">Email address</label>
          <Email className="form-control input-lg" placeholder="bruce@example.com"/>
          </FormGroup>

          <Checkbox defaultChecked>
            Do you want to sign up for this shit or not?????
          </Checkbox>


        </Form>
        </Panel>
        </Grid>

      </div>

    )
  }
};

export default KioskMode;
