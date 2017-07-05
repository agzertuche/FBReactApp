import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';

const Container = styled(Row)`
  padding: 0 2em;
`;

const ContactItem = styled(Col)`
  text-align: center;
  padding: 1em;
`;

class Contact extends Component {
  render(){
    return(
      <Container>
        <Helmet>
          <title>Contact</title>
          <meta name="description" content="Contact description" />
        </Helmet>
        <Col>
          <h2>Contact Us</h2>
        </Col>        
        <Col>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        </Col>
        <ContactItem xs={4}> 
          <Image src="http://via.placeholder.com/70x70" circle />
          <h4>Facebook</h4>
        </ContactItem>
        <ContactItem xs={4}> 
          <Image src="http://via.placeholder.com/70x70" circle />
          <h4>Twitter</h4>
        </ContactItem>
        <ContactItem xs={4}> 
          <Image src="http://via.placeholder.com/70x70" circle />
          <h4>Youtube</h4>
        </ContactItem>
      </Container>
    );
  }
}

export default Contact;