import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';

class Contact extends Component {
  render(){
    return(
      <Row className="contact">
        <section>
          <h2>Contact Us</h2>
          <br/>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
          <br/>
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
        </section>
      </Row>
    );
  }
}

export default Contact;