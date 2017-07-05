import React, {Component} from 'react';
import {Row, Col, Image, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';

const Container = styled(Row)`
  padding: 0 2em;  
`;

const ImageContainer = styled(Col)`
  text-align: center;
`;
 
class About extends Component {
  render(){
    return(
      <Container>
        <Helmet>
          <title>About</title>
          <meta name="description" content="About description" />
        </Helmet>
        <Col>
          <h2>Company Name</h2>
        </Col>
        <Col sm={8}>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          <LinkContainer to='/contact'> 
            <Button >Contact Us!</Button>
          </LinkContainer> 
          <br/>
          <br/>
        </Col>
        <ImageContainer sm={4}>
          <Image src="http://via.placeholder.com/300x200" />
        </ImageContainer>
      </Container>
    );
  }
}

export default About;
