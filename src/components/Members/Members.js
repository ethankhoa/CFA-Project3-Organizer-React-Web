import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Col, Well, Panel, Button } from 'react-bootstrap';
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
    this.getMembers();

  };

  componentDidMount() {
    console.log('componentDidMount');
    // this.state.members(() => {});


  };

  getMembers() {
    const URL = 'http://localhost:3000/members'
    Axios.get(URL)
      .then((response) => {
        this.setState({ members: response.data });
        console.log(response.data);
        //
        console.log("members" + this.state.members);
        console.log(JSON.stringify(this.state.members));
      })
      .catch((error) => {
        console.log(error);
      });
  };

render() {
  return (
    <div>
      {/* <Switch>
        <Route path='/members/addmember' component={AddMember}/>
      </Switch> */}
      <h3>Members Portal</h3>
        <Col xs={6} md={6}>
        <Well>
          <ListMembers members={this.state.members} />
        </Well>
      </Col>
      <Col xs={6} md={6}>
      <Well>
        <h4>Search</h4>
        <Button>Add New Member</Button>

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
