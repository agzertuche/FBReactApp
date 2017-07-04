import React, {Component} from 'react';
import {Row, Col, Image, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import styled from 'styled-components';

const Container = styled(Row)`
  padding: 0 2em;
`;
 
class About extends Component {
  render(){
    return(
      <Container>
        <Col sm={8}>
          <h2>Company Name</h2>
          <br/>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          <br/>
          <LinkContainer to='/contact'> 
            <Button >Contact Us!</Button>
          </LinkContainer> 
        </Col>
        <Col sm={4}>
          <Image src="http://via.placeholder.com/300x300" />
        </Col>
      </Container>
    );
  }
}

export default About;
