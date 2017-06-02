import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';
import NavMain from './components/nav/NavMain';
import NavLeft from './components/nav/NavLeft';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavMain />
        <Container fluid>
          <Col xs="3">
            <NavLeft />
          </Col>

        </Container>

      </div>


    );
  }
}

export default App;
