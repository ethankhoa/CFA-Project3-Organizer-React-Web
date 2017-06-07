import React, { Component } from 'react';
import Axios from 'axios';
import { Col, Well, Tabs, Tab, Panel, Button } from 'react-bootstrap';
import { Form, FormGroup, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';
import { Redirect } from 'react-router';


class AddMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      member: false
    }
    this.addMemberSubmit = this.addMemberSubmit.bind(this);

  };

  addMemberSubmit() {
    const URL = `http://localhost:3000/members`
    Axios.post(URL, {
      "firstName": this.inputFirstName.value,
      "lastName": this.inputLastName.value,
      "email": this.inputEmail.value,
      "phone": this.inputPhone.value,
      "emailOptIn": this.inputEmailOptIn.checked,
      "isMember": this.inputIsMember.checked,
      "street": this.inputStreetAddress.value,
      "state": this.inputStateAddress.value,
      "postCode": this.inputPostCodeAddress.value,
      "city": this.inputCityAddress.value,
      "day": this.inputDayBirthday.value,
      "month": this.inputMonthBirtday.value,
      "year": this.inputYearBirthday.value
    })
    .then((response) => {
      console.log(response.data.message);
      alert(`${response.data.message}`);
      this.setState({
        redirect: true,
        member: response.data
      })
      console.log()
    })
    .catch(function(error) {
      console.log(error)
    });
  };

  render() {
    const panelFooter = (
      <div>
        <Button href='/members'>Cancel</Button>
        {` `}
        <Button bsStyle="success" onClick={this.addMemberSubmit}>Add Member</Button>
      </div>
    );

    const panelHeader = (
      <h3>Add New Member</h3>

    );
    // const { member } = this.state;
    //
    //  if (member._id) {
    //    return <Redirect to={`members/${member._id}`}/>;
    //  }


    return(
  <Panel footer={panelFooter} bsStyle="primary" header={panelHeader}>
    <p>* is required</p>

    <Tabs defaultActiveKey={1} id="edit-user-modal">


      <Tab eventKey={1} title="General">

        <Form>
          <br/>
          <FormGroup controlId="formHorizontalFirst">
            <Col componentClass={ControlLabel}>
              First Name*
            </Col>
            <Col >
              <FormControl
                type="text"
                placeholder="John"
                inputRef={ref => { this.inputFirstName = ref; }}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalLast">
            <Col componentClass={ControlLabel}>
              Last Name*
            </Col>
            <Col >
              <FormControl
                type="text"
                name="lastName"
                placeholder="Smith"
                onChange={this.handleInputChange}
                inputRef={ref => { this.inputLastName = ref; }}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel}>
              Email*
            </Col>
            <Col >
              <FormControl
                type="email"
                placeholder="Email"
                inputRef={ref => { this.inputEmail = ref; }}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPhone">
            <Col componentClass={ControlLabel}>
              Phone
            </Col>
            <Col >
              <FormControl
                type="phone"
                placeholder="Phone"
                inputRef={ref => { this.inputPhone = ref; }}
              />
            </Col>
          </FormGroup>
        </Form>
        <b>Birthday</b>
      <br/>
        <Form inline>
          <FormGroup controlId="formInlineDay">
                <ControlLabel>Day</ControlLabel>
                {' '}
                <FormControl
                  inputRef={ref => { this.inputDayBirthday = ref; }}
                  type="number"
                  min="1"
                  max="31"
                />
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlineMonth">
                <ControlLabel>Month</ControlLabel>
                {' '}
                <FormControl
                  inputRef={ref => { this.inputMonthBirtday = ref; }}
                  type="number"
                  min="1"
                  max="12"
                />
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlineYear">
                <ControlLabel>Year</ControlLabel>
                {' '}
                <FormControl
                  inputRef={ref => { this.inputYearBirthday = ref; }}
                  type="number"
                  min="1900"
                  max="2017"/>
              </FormGroup>
        </Form>


      </Tab>
      <Tab eventKey={2} title="Address">

        <Form>
          <br/>
          <FormGroup controlId="formHorizontalStreet">
            <Col componentClass={ControlLabel}>
              Street Address
            </Col>
            <Col >
              <FormControl
                type="text"
                placeholder="123 Happy St"
                inputRef={ref => { this.inputStreetAddress = ref; }}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalCity">
            <Col componentClass={ControlLabel}>
              City
            </Col>
            <Col >
              <FormControl
                type="city"
                placeholder="Sydney"
                inputRef={ref => { this.inputCityAddress = ref; }}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalState">
            <Col componentClass={ControlLabel}>
              State
            </Col>
            <Col >
              <FormControl
                type="state"
                placeholder="NSW"
                inputRef={ref => { this.inputStateAddress = ref; }}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPostCode">
            <Col componentClass={ControlLabel}>
              Post Code
            </Col>
            <Col >
              <FormControl
                type="postCode"
                placeholder="2060"
                inputRef={ref => { this.inputPostCodeAddress = ref; }}
              />
            </Col>
          </FormGroup>

        </Form>

      </Tab>
      <Tab eventKey={3} title="Settings">
        <Form>
          <br/>
          Is the member currently subscribed to the weekly newsletter?
          <Checkbox
            inputRef={ref => { this.inputEmailOptIn = ref; }}>
            This Week at Chatswood Subscription
          </Checkbox>
          <br/>

          Is the member an official member of Chatswood?
          <Checkbox
            inputRef={ref => { this.inputIsMember = ref; }} >
            Chatswood Church Membership
          </Checkbox>

        </Form>
      </Tab>

    </Tabs>

    <br/>


    </Panel>


    )
  }
}

export default AddMember;
