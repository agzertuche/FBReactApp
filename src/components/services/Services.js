import React, {Component} from 'react';
import {Row, Col, Glyphicon} from 'react-bootstrap';
import styled from 'styled-components';

const Container = styled(Row)`
  padding: 0 2em;

  div{
    text-align: center;
    padding: 3em;
  }

  span {
    font-size: 3em;
  }
`;

class Services extends Component{
  render(){
    return(
      <Container>
        <h2>Services</h2>
        <Col sm={4} >
          <Glyphicon glyph="stats" />
          <h4>PERFORMANCE</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </Col>
        <Col sm={4} >
          <Glyphicon glyph="briefcase" />
          <h4>DEALS</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </Col>
        <Col sm={4} >
          <Glyphicon glyph="wrench" />
          <h4>SUPPORT</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </Col>
      </Container>
    );
  }
}

export default Services; 