import React, { Component } from 'react';
import { Col, Well, Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Axios from 'axios';
import ListMembers from './ListMembers';



class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
    this.getMembers = this.getMembers.bind(this);

  }

  componentWillMount() {
    console.log('componentWillMount');
    // this.getMembers();

  };

  componentDidMount() {
    console.log('componentDidMount');
    this.getMembers();

  };

  getMembers() {
    const URL = `${process.env.REACT_APP_CO_MONGOLAB_LOCAL_URI}/members`
    Axios.get(URL)
      .then((response) => {
        console.log('what is the url', URL);
        this.setState({ members: response.data });
        // console.log(response.data);
        // console.log("members" + this.state.members);
        // console.log(JSON.stringify(this.state.members));
      })
      .catch((error) => {
        console.log(error);
        console.log('what is the url', process.env.REACT_APP_CO_MONGOLAB_LOCAL_URI);

      });

  };

render() {
  return (
    <div>
      <h3>Members Portal</h3>
        <Col xs={6} md={6}>
        <Well>
          <ListMembers members={this.state.members} />
        </Well>
      </Col>
      <Col xs={6} md={6}>
        <Well>
          <h4>Search</h4>
          <Form>
            <FormGroup>
              <FormControl type="text" placeholder="Enter your search here" />
            </FormGroup>
          </Form>
        </Well>
      </Col>
    </div>
    )
  };

}

Members.propTypes = {
  members: PropTypes.array
};

export default Members;
