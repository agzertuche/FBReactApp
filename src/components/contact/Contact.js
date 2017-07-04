import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import styled from 'styled-components';

const Container = styled(Row)`
  padding: 0 2em;
  
  div {
    text-align: center;
    padding: 1em;
  }
`;

class Contact extends Component {
  render(){
    return(
      <Container>
        <h2>Contact Us</h2>
        <Row>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        </Row>
        <Col xs={4}> 
          <Image src="http://via.placeholder.com/100x100" circle />
          <h4>Facebook</h4>
        </Col>
        <Col xs={4}> 
          <Image src="http://via.placeholder.com/100x100" circle />
          <h4>Twitter</h4>
        </Col>
        <Col xs={4}> 
          <Image src="http://via.placeholder.com/100x100" circle />
          <h4>Youtube</h4>
        </Col>
      </Container>
    );
  }
}

export default Contact;