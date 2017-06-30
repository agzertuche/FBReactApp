import React, {Component} from 'react';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Navigation extends Component{
  render(){
    return(
      <Navbar fixedTop>
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
                <MenuItem>Product One</MenuItem>
                <MenuItem>Product Two</MenuItem>
                <MenuItem divider/>
                <MenuItem>Product Three</MenuItem>
              </NavDropdown>
            </LinkContainer>
            <LinkContainer to='/contact'> 
              <NavItem>CONTACT</NavItem>
            </LinkContainer>            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;