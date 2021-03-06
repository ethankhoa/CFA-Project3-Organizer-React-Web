import React, { Component } from 'react';
import {
  Grid,
  Button,
  Form,
  FormGroup,
  FormControl,
  Checkbox,
  Panel,
  ControlLabel,
  Modal,
  Col,
  PageHeader
}
from 'react-bootstrap';
// import { Route } from 'react-router-dom';
// import Email from 'react-email-autocomplete';
import Axios from 'axios';
import Loadable from 'react-loading-overlay';
import './KioskMode.css';

class KioskMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: false,
      lastName: false,
      email: false,
      emailOptIn: false,
      inputText: false,
      successModal: false,
      isActive: false,
      isMember: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.showSuccessModal = this.showSuccessModal.bind(this);
    this.closeSuccessModal = this.closeSuccessModal.bind(this);
    this.addMemberSubmit = this.addMemberSubmit.bind(this);
  }

  resetState() {
    this.inputFirstName.value = '';
    this.inputLastName.value = '';
    this.inputEmail.value = '';
    this.setState({
      firstName: false,
      lastName: false,
      email: false
    })
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
      console.log("New state in ASYNC callback:", this.state.firstName, this.state.lastName, this.state.email, this.state.isMember);
    });
    console.log("testing checkbox", this.state.emailOptIn)

  }

  addMemberSubmit() {
    const URL = `${process.env.REACT_APP_CO_MONGOLAB_LOCAL_URI}/members`
    Axios.post(URL, {
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "email": this.state.email,
      "emailOptIn": this.state.emailOptIn,
      "isMember": this.state.isMember
      // "isMember": this.inputIsMember.checked,
    }).then((response) => {
      console.log(response.data)
      this.setState({
        responseDataMessage: response.data.message
      }, () => {
        this.showSuccessModal(this.state);
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  showSuccessModal() {
    this.setState({successModal: true});
    console.log('showsuccess', this.state.member);
  }

  closeSuccessModal() {
    this.setState({successModal: false});
    this.resetState();
  }

  render() {

    const panelFooter = (
      <div>
      <Button bsSize="large" onClick={this.resetState}>Cancel </Button>
      {` `}
      <Button bsSize="large" bsStyle="success" onClick={this.addMemberSubmit}>Sign Up</Button>
      </div>
    )



    return (
      <div className="height-full bg-dark">
        <Loadable
          active={false}
          spinner
          text='Loading your content...'
          >

        <Grid>
          <Col>
            <PageHeader>
        <img src="https://chatswoodchurch.org/wp-content/themes/adventist-spd-peace/images/logo/top/Chatswood_b@2x.png" />
        <Button className="pull-right" href="/app/dashboard">Exit Kiosk Mode
        </Button>
        <small><p>Please fill out your info below to receive updates.</p></small>

        {` `}
        </PageHeader>

        <h3>SIGN UP</h3>

        <Panel bsStyle="info" footer={panelFooter}>
        {` `}
        <Form>
          <FormGroup inline bsSize="large">
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={this.handleInputChange}
              inputRef={ref => {
                this.inputFirstName = ref;
              }}/>

          </FormGroup>
          <FormGroup inline bsSize="large">
            <ControlLabel>Last Name</ControlLabel>
            <FormControl
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={this.handleInputChange}
              inputRef={ref => {
                this.inputLastName = ref;
              }}/>

          </FormGroup>
          <FormGroup bsSize="large">
            <ControlLabel>Email Address</ControlLabel>

          {/* <label htmlFor="eac-input">Email address</label> */}

          <FormControl
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={this.handleInputChange}
            inputRef={ref => {
              this.inputEmail = ref;
            }}/>


          {/* <Email
            className="form-control input-lg"
            placeholder="bruce@example.com"
            onChange={(e) => { this.setState(
              { emailAddress: e.target.value }
            ); }}
          /> */}
          </FormGroup>

          <Checkbox
            checked={this.state.emailOptIn}
            name="emailOptIn"
            onChange={this.handleInputChange} >
            I would like to receive the weekly Chatswood newsletter and receive periodic updates from Chatswood.
          </Checkbox>


        </Form>
        </Panel>
        <Modal bsSize="small" show={this.state.successModal} onHide={this.closeSuccessModal}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">Success!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>You've signed up successfully.</h4>

            {/* <h4>{this.state.responseDataMessage}</h4> */}
          </Modal.Body>
          <Modal.Footer>
            {/* <Button onClick={this.closeSuccessModal}>Cancel</Button> */}
            <Button bsStyle="success" onClick={this.closeSuccessModal}>Sweet</Button>
          </Modal.Footer>

        </Modal>
        </Col>
        </Grid>


      </Loadable>

      </div>

    )
  }
};

export default KioskMode;
