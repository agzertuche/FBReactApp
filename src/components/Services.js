import React, {Component} from 'react';
import {Row, Col, Glyphicon} from 'react-bootstrap';

class Services extends Component{
  render(){
    return(
      <Row className="services">
        <section>
          <h2>Services</h2>
          <Col sm={4} className="service-item">
            <Glyphicon glyph="stats" />
            <h4>PERFORMANCE</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </Col>
          <Col sm={4} className="service-item">
            <Glyphicon glyph="briefcase" />
            <h4>DEALS</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </Col>
          <Col sm={4} className="service-item">
            <Glyphicon glyph="wrench" />
            <h4>SUPPORT</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </Col>
        </section>
      </Row>
    );
  }
}

export default Services; 