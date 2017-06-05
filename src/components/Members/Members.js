import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
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
      <h3>Members Portal</h3>
        <ListMembers members={this.state.members} />
    </div>
  )
};
}

Members.propTypes = {
  members: PropTypes.array
};

export default Members;
