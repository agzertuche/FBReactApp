import React, {Component} from 'react';
import {Row, Col, Glyphicon} from 'react-bootstrap';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';

const Container = styled(Row)`
  padding: 0 2em;
`;

const ServiceItem = styled(Col)`
  text-align: center;
  padding: 3em;

  span {
    font-size: 3em;
  }
`;

class Services extends Component{
  render(){
    return(
      <Container>
        <Helmet>
          <title>Services</title>
          <meta name="description" content="Services description" />
        </Helmet>
        <Col>
          <h2>Services</h2>        
        </Col>
        <ServiceItem sm={4} >
          <Glyphicon glyph="stats" />
          <h4>PERFORMANCE</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </ServiceItem>
        <ServiceItem sm={4} >
          <Glyphicon glyph="briefcase" />
          <h4>DEALS</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </ServiceItem>
        <ServiceItem sm={4} >
          <Glyphicon glyph="wrench" />
          <h4>SUPPORT</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </ServiceItem>
      </Container>
    );
  }
}

export default Services; 