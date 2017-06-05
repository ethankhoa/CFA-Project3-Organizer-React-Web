import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';
import NavMain from '../Nav/NavMain';
import NavLeft from '../Nav/NavLeft';
import Main from '../Main/Main';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    }
  };

  render() {
    return (
      <div>
        <NavMain />
        <Grid fluid>
          <Col xs={6} md={4}>
            <NavLeft />
          </Col>
          <Col xs={12} md={8}>
            <Main />
          </Col>
        </Grid>
      </div>


    );
  }
}

export default App;
