import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';
import Axios from 'axios';
import NavMain from '../Nav/NavMain';
import NavLeft from '../Nav/NavLeft';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    }
  };

  componentWillMount() {
    console.log('componentWillMount');

  };

  componentDidMount() {
    console.log('componentDidMount');
    this.getMembers();
  };

  getMembers() {
    const URL = 'http://localhost:3000/members'
    Axios.get(URL)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
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
