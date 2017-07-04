import React, {Component} from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';

const Container = styled.header`
`;

class Header extends Component{
  render(){
    return(     
      <Container>
        <Navigation/>
      </Container>
    );
  }
}

export default Header;