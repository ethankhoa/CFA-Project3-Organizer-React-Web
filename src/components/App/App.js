import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
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
          <Col xs={6} md={2}>
            <NavLeft />
          </Col>
          <Col xs={12} md={10}>
            <Main />
          </Col>
      </div>


    );
  }
}

export default App;
