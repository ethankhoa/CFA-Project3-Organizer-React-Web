import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Well, Button, Modal, Tab, Tabs, Col } from 'react-bootstrap';
import { Form, FormGroup, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';


class ViewMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: false,
      showModal: false
    };
    this.getMember = this.getMember.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

  }

  open() {
  this.setState({ showModal: true });
  console.log("member" + this.state.member);

  }

  close() {
  this.setState({ showModal: false });
  }

  componentDidMount() {
    console.log('componentWillMount');
    this.getMember();
  };

  getMember() {
    {console.log("params?" + this.props.match.params.id)}
    const URL = `http://localhost:3000/members/${this.props.match.params.id}`
    Axios.get(URL)
      .then((response) => {
        this.setState({ member: response.data });
        console.log(response.data);
        //
        // console.log("member" + this.state.member);
        // console.log(JSON.stringify(this.state.member));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render(){
    return (
      <div>
        {this.state.member ? (
          <div>
          <Well>
            <h4>Name </h4>
              <p>
                {this.state.member.name.title}
                {this.state.member.name.first} {this.state.member.name.last}
              </p>
            <h4>Email </h4>
              <p><a href={`mailto:${this.state.member.email}?Subject=Hello%20again`} target="_top">{this.state.member.email}</a></p>

            <h4>Address</h4>
            {this.state.member.address.street ? (
              <p>
                <p>{this.state.member.address.street}</p>
                <p>
                  {this.state.member.address.city} {this.state.member.address.state}
                  {this.state.member.address.postCode}
                </p>
              </p>
            ) : (
              <p><i>There is no address saved for this member.</i></p>
            )}

            <h4>Phone</h4>
            {this.state.member.phone ? (
              <p>{this.state.member.phone}</p>
            ) : (
              <p><i>There is no phone number saved for this member.</i></p>
            )}

            <h4>Birthday</h4>
            {this.state.member.birthday.day ? (
              <p>{this.state.member.birthday.day}/{this.state.member.birthday.day}</p>
            ) : (
              <p><i>There is no birthday saved for this member.</i></p>
            )}

            <h4>Newsletter</h4>
              <p>{this.state.member.emailOptIn.toString()}</p>

            <h4>Church Member</h4>
              <p>{this.state.member.isMember.toString()}</p>




          <Button bsStyle="info" onClick={this.open}>Edit User</Button> <Button bsStyle="danger">Delete</Button>
          </Well>


        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tabs defaultActiveKey={1} id="edit-user-modal">
              {this.state.member ? (

              <Tab eventKey={1} title="General">

                <Form>
                  <br/>
                  <FormGroup controlId="formHorizontalFirst">
                    <Col componentClass={ControlLabel}>
                      First Name
                    </Col>
                    <Col >
                      <FormControl type="text"             defaultValue={this.state.member.name.first}
                      placeholder="John" />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalLast">
                    <Col componentClass={ControlLabel}>
                      Last Name
                    </Col>
                    <Col >
                      <FormControl type="lastName" defaultValue={this.state.member.name.last} placeholder="Smith" />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel}>
                      Email
                    </Col>
                    <Col >
                      <FormControl type="email" defaultValue={this.state.member.email} placeholder="Email" />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalPhone">
                    <Col componentClass={ControlLabel}>
                      Phone
                    </Col>
                    <Col >
                      <FormControl type="phone" defaultValue={this.state.member.phone} placeholder="Phone" />
                    </Col>
                  </FormGroup>
                </Form>
                <b>Birthday</b>
              <br/>
                <Form inline>
                  <FormGroup controlId="formInlineDay">
                        <ControlLabel>Day</ControlLabel>
                        {' '}
                        <FormControl type="number" min="1" max="31" />
                      </FormGroup>
                      {' '}
                      <FormGroup controlId="formInlineMonth">
                        <ControlLabel>Month</ControlLabel>
                        {' '}
                        <FormControl type="number" min="1" max="12"/>
                      </FormGroup>
                      {' '}
                      <FormGroup controlId="formInlineYear">
                        <ControlLabel>Year</ControlLabel>
                        {' '}
                        <FormControl type="number" min="1900" max="2017"/>
                      </FormGroup>
                </Form>


              </Tab>
            ) : (
              <p>Loading.. </p>
            )}
              <Tab eventKey={2} title="Address">
                {this.state.member ? (

                <Form>
                  <br/>
                  <FormGroup controlId="formHorizontalStreet">
                    <Col componentClass={ControlLabel}>
                      Street Address
                    </Col>
                    <Col >
                      <FormControl
                        type="text"
                        defaultValue={this.state.member.address.street}
                        placeholder="123 Happy St" />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalCity">
                    <Col componentClass={ControlLabel}>
                      City
                    </Col>
                    <Col >
                      <FormControl type="city" placeholder="Sydney" />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalState">
                    <Col componentClass={ControlLabel}>
                      State
                    </Col>
                    <Col >
                      <FormControl type="state" placeholder="NSW" />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalPostCode">
                    <Col componentClass={ControlLabel}>
                      Post Code
                    </Col>
                    <Col >
                      <FormControl type="postCode" placeholder="2060" />
                    </Col>
                  </FormGroup>

                </Form>
              ) : (
                <p>Loading</p>
              )}
              </Tab>
              <Tab eventKey={3} title="Settings">
                <Form>
                  <br/>
                  Is the member currently subscribed to the weekly newsletter?
                  <Checkbox defaultChecked={this.state.member.emailOptIn}>
                    This Week at Chatswood Subscription
                  </Checkbox>
                  <br/>

                  Is the member an official member of Chatswood?
                  <Checkbox defaultChecked={this.state.member.isMember}>
                    Chatswood Church Membership
                  </Checkbox>

                </Form>
              </Tab>
            </Tabs>




          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Cancel</Button>
            <Button bsStyle="success">Submit</Button>
          </Modal.Footer>
        </Modal>
        </div>
      ) : (
        'Loading man1!!!!!!!!!...'
      )}

      </div>


    )
    }
  };

ViewMember.propTypes = {
  member: PropTypes.object
};

export default ViewMember;
