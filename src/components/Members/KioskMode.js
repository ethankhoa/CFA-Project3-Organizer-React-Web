import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, Checkbox } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Email from 'react-email-autocomplete';



class KioskMode extends Component {

  render() {
    return(
      <div>
        <h2>KIOSK MODE!!!!!!!</h2>
        <p>fuck no buttons please shit</p>
        <Button className="pull-right" href="/app/dashboard">Exit Kiosk Mode </Button>

        <Form>
          <FormGroup inline bsSize="large">
            <FormControl type="text" placeholder="Large text" />
          </FormGroup>
          <FormGroup inline bsSize="large">
            <FormControl type="text" placeholder="Large text" />
          </FormGroup>

          <Email className="form-control input-lg" placeholder="bruce@example.com"/>


          <Checkbox defaultChecked >
            Do you want to sign up for this shit or not?????
          </Checkbox>

          <Button>Cancel this shit man!</Button>
          <Button bsStyle="success">Send it dude!</Button>
        </Form>


      </div>


    )
  }
};

export default KioskMode;
