import React, {Component} from 'react';
import {Image, Col} from 'react-bootstrap';

class Footer extends Component{
  render(){
    return(
      <footer>        
        <Col xs={6}>
          <span>Copyright © Company 2017. All Rights Reserved</span>
        </Col>
        <Col xs={6}>
        <span>
          <Image src="http://via.placeholder.com/30x30" circle />
        </span>
        <span>
          <Image src="http://via.placeholder.com/30x30" circle />
        </span>
        <span>
          <Image src="http://via.placeholder.com/30x30" circle />
        </span>
        </Col>
      </footer>
    );
  }    
}

export default Footer;