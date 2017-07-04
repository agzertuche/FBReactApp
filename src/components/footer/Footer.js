import React, {Component} from 'react';
import {Image, Col} from 'react-bootstrap';
import styled from 'styled-components';

const Container = styled.footer`
  text-align: center;

  div {
    padding: 1.5em;
  }

  span {
    padding: 0.4em;
  }
`;

class Footer extends Component{
  render(){
    return(
      <Container>        
        <Col xs={6}>
          <span>Copyright © Company 2017. All Rights Reserved</span>
        </Col>
        <Col xs={6}>
        <span>
          <Image src="http://via.placeholder.com/30x30" circle />
        </span>
        <span>
          <Image src="http://via.placeholder.com/30x30" circle />
        </span>
        <span>
          <Image src="http://via.placeholder.com/30x30" circle />
        </span>
        </Col>
      </Container>
    );
  }    
}

export default Footer;