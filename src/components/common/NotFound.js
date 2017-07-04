import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import styled from 'styled-components';

const Container = styled(Row)`
  padding: 0 2em;
  text-align: center;
`;

class NotFound extends Component{
  render(){
    return(     
      <Container> 
        <h3>404 page not found</h3>
        <p>We are sorry but the page you are looking for does not exist.</p>
      </Container>
    );
  }
}

export default NotFound;