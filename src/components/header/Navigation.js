import React, {Component} from 'react';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import ModalButton from '../common/ModalButton';
import styled from 'styled-components';

const Container = styled.div`
  .navbar-brand {
    height: 4em;
    width: auto;
  }

  .nav > li > a {
    padding-top: 2em;
    padding-bottom: 2em;
  }

  .navbar-toggle {
    padding: .5em;
    margin: 1.5em;
  }
`;

class Navigation extends Component{
  render(){
    return(
      <Container> 
        <Navbar fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLinkContainer to='/' > 
                <img src="http://via.placeholder.com/150x50" alt="Company Logo" />
              </IndexLinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to='/about'> 
                <NavItem>ABOUT</NavItem>
              </LinkContainer>
              <LinkContainer to='/services'>               
                <NavItem>SERVICES</NavItem>
              </LinkContainer>
              <LinkContainer to='/products'> 
                <NavDropdown title="PRODUCTS" id="nav-dropdown">
                  <MenuItem>
                    <ModalButton modalTitle="Product One" buttonText="Product One" buttonStyle="link" />
                  </MenuItem>
                  <MenuItem>
                    <ModalButton modalTitle="Product Two" buttonText="Product Two" buttonStyle="link" />
                  </MenuItem>
                  <MenuItem divider/>
                  <MenuItem>
                    <ModalButton modalTitle="Product Three" buttonText="Product Three" buttonStyle="link" />
                  </MenuItem>
                  <MenuItem>
                    <ModalButton modalTitle="Product Four" buttonText="Product Four" buttonStyle="link" />
                  </MenuItem>
                </NavDropdown>
              </LinkContainer>
              <LinkContainer to='/contact'> 
                <NavItem>CONTACT</NavItem>
              </LinkContainer>            
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Navigation;