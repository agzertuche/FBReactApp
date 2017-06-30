import React, {Component} from 'react';
import {Row, Col, Image, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
 
class About extends Component {
  render(){
    return(
      <Row className="about">
        <section>
          <Col sm={8}>
            <h1>Company Name</h1>
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
        </section>
      </Row>
    );
  }
}

export default About;
