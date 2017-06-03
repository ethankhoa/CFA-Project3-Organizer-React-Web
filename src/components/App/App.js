import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';
import Axios from 'axios';
import NavMain from '../Nav/NavMain';
import NavLeft from '../Nav/NavLeft';
import ListMembers from '../Members/ListMembers';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    }
  };

  getMembers() {
    const URL = 'http://localhost:3000/members'
    Axios.get(URL)
      .then((response) => {
        this.setState({ members: response.data });
        // console.log(response.data);

        // console.log(this.state.members);

      })
      .catch((error) => {
        console.log(error);
      });
  };


  componentWillMount() {
    console.log('componentWillMount');

  };

  componentDidMount() {
    console.log('componentDidMount');
    console.log('members', this.state.members)
    this.getMembers();
    // this.state.members(() => {});


  };

  render() {
    return (
      <div>
        <NavMain />
        <Grid fluid>
          <Col xs={6} md={4}>
            <NavLeft getMembers={() => this.getMembers()} />
          </Col>
        </Grid>
      </div>


    );
  }
}

export default App;
