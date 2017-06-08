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
  constructor(props) {
    super(props);
    this.state = {
      firstName: false,
      lastName: false,
      email: false,
      emailAddress: false,
      emailOptIn: true,
      inputText: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }



  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    const name = target.name;
    // const id = target.id;

    this.setState({
      [name]: value
      // [id]: value,
    }, () => {
      console.log("New state in ASYNC callback:", this.state.firstName, this.state.lastName, this.state.email, this.state.emailAddress, this.state.emailOptIn);
    });
    console.log("testing checkbox", this.state.emailOptIn)

  }

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
            <FormControl
              type="text"
              placeholder="Large text"
              name="firstName"
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup inline bsSize="large">
            <ControlLabel>Last Name</ControlLabel>
            <FormControl
              type="text"
              placeholder="Large text"
              name="lastName"
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup bsSize="large">
            <ControlLabel>Email Address</ControlLabel>

          {/* <label htmlFor="eac-input">Email address</label> */}

          <FormControl
            type="email"
            placeholder="email"
            name="email"
            onChange={this.handleInputChange}
          />

          {/* <Email
            className="form-control input-lg"
            placeholder="bruce@example.com"
            onChange={(e) => { this.setState(
              { emailAddress: e.target.value }
            ); }}
          /> */}
          </FormGroup>

          <Checkbox defaultChecked name="emailOptIn"               onChange={this.handleInputChange} >
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
