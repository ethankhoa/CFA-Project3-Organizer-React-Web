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
      showEditModal: false,
      showDeleteConfirmModal: false
    };
    this.getMember = this.getMember.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
    this.openDeleteConfirmModal = this.openDeleteConfirmModal.bind(this);
    this.closeDeleteConfirmModal = this.closeDeleteConfirmModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.editMemberSubmit = this.editMemberSubmit.bind(this);
    this.deleteMember = this.deleteMember.bind(this);


  }

  openDeleteConfirmModal() {
    this.setState({ showDeleteConfirmModal: true })
  }

  closeDeleteConfirmModal() {
    this.setState({ showDeleteConfirmModal: false })
  }

  openEditModal() {
  this.setState({ showEditModal: true });
  console.log("member" + this.state.member);
  }

  closeEditModal() {
  this.setState({ showEditModal: false });
  }

  componentDidMount() {
    console.log('componentWillMount');
    this.getMember();
  };

  deleteMember() {
    const URL = `http://localhost:3000/members/${this.props.match.params.id}`
    Axios.delete(URL)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    }, () => {
      console.log("New state in ASYNC callback:", this.state.isMember);
    });
    console.log("testing member id", this.state.member._id)

  }

  editMemberSubmit() {
     const URL = `http://localhost:3000/members/${this.state.member._id}/edit`
     Axios.post(URL, {
       "email": this.inputEmail.value,
      //  "title": this.inputTitleName.value,
       "name.first": this.inputFirstName.value,
       "name.last": this.inputLastName.value,
       "phone": this.inputPhone.value,
       "emailOptIn": this.inputEmailOptIn.checked,
       "isMember": this.inputIsMember.checked,
       "address.street": this.inputStreetAddress.value,
       "address.state": this.inputStateAddress.value,
       "address.postCode": this.inputPostCodeAddress.value,
       "address.city": this.inputCityAddress.value,
       "birthday.day": this.inputDayBirthday.value,
       "birthday.month": this.inputMonthBirtday.value,
       "birthday.year": this.inputYearBirthday.value
   })
    .then((response) => {
      console.log(response.data.message);
      alert(`${response.data.message}`);
      this.closeEditModal();
      this.getMember();

      // reset value of input field
      // this.nameInput.value = '';
      // this.props.getIngredientList();
    })
    .catch(function(error) {
      console.log(error)
    });
 };

  render(){
    return (
      <div>
        {this.state.member ? (
          <div>
          <Well>
            <p>Name </p>
              <p>
                {this.state.member.name.title}
                {this.state.member.name.first} {this.state.member.name.last}
              </p>
            <p>Email </p>
              <p><a href={`mailto:${this.state.member.email}?Subject=Hello%20again`} target="_top">{this.state.member.email}</a></p>

            <p>Address</p>
            {this.state.member.address.street ? (
              <p>
                <p>{this.state.member.address.street}</p>
                <p>
                  {this.state.member.address.city} {this.state.member.address.state}
                  <p>{this.state.member.address.postCode}</p>
                </p>
              </p>
            ) : (
              <p><i>There is no address saved for this member.</i></p>
            )}

            <p>Phone</p>
            {this.state.member.phone ? (
              <p>{this.state.member.phone}</p>
            ) : (
              <p><i>There is no phone number saved for this member.</i></p>
            )}

            <p>Birthday</p>
            {this.state.member.birthday.day ? (
              <p>{this.state.member.birthday.day}/{this.state.member.birthday.day}</p>
            ) : (
              <p><i>There is no birthday saved for this member.</i></p>
            )}

            <p>Newsletter</p>
              <p>{this.state.member.emailOptIn.toString()}</p>

            <p>Church Member</p>
              <p>{this.state.member.isMember.toString()}</p>




          <Button bsStyle="info" onClick={this.openEditModal}>Edit User</Button> <Button bsStyle="danger" onClick={this.openDeleteConfirmModal}>Delete</Button>
          </Well>


        <Modal show={this.state.showEditModal} onHide={this.closeEditModal}>
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
                      <FormControl
                        type="text"
                        defaultValue={this.state.member.name.first}
                        placeholder="John"
                        inputRef={ref => { this.inputFirstName = ref; }}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalLast">
                    <Col componentClass={ControlLabel}>
                      Last Name
                    </Col>
                    <Col >
                      <FormControl
                        type="text"
                        name="lastName"
                        defaultValue={this.state.member.name.last}
                        placeholder="Smith"
                        onChange={this.handleInputChange}
                        inputRef={ref => { this.inputLastName = ref; }}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel}>
                      Email
                    </Col>
                    <Col >
                      <FormControl
                        type="email"
                        defaultValue={this.state.member.email}
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
                        defaultValue={this.state.member.phone}
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
                        defaultValue={this.state.member.address.city}
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
                        defaultValue={this.state.member.address.state}
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
                        defaultValue={this.state.member.address.postCode}
                      />
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
                  <Checkbox
                    defaultChecked={this.state.member.emailOptIn}
                    inputRef={ref => { this.inputEmailOptIn = ref; }}>
                    This Week at Chatswood Subscription
                  </Checkbox>
                  <br/>

                  Is the member an official member of Chatswood?
                  <Checkbox
                    inputRef={ref => { this.inputIsMember = ref; }}
                    defaultChecked={this.state.member.isMember}>
                    Chatswood Church Membership
                  </Checkbox>

                </Form>
              </Tab>
            </Tabs>




          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeEditModal}>Cancel</Button>
            <Button bsStyle="success" onClick={this.editMemberSubmit}>Save</Button>
          </Modal.Footer>
        </Modal>


        <Modal show={this.state.showDeleteConfirmModal} onHide={this.closeDeleteConfirmModal}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Delete Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{this.state.member.name.first} {this.state.member.name.last}</h4>
          <br/>
          <h5>Are you sure you want to delete this member? This can not be undone.</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.closeDeleteConfirmModal}>Cancel</Button>
          <Button bsStyle="danger" onClick={this.closeDeleteConfirmModal}>Confirm Delete</Button>
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
