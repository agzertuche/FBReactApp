import React, {Component} from 'react';
import {Row, Col, Thumbnail, Button} from 'react-bootstrap';

class Products extends Component {
  render(){
    return(
      <Row className="products">
        <section>
          <h2>Products</h2>
          <Col xs={12} sm={6} lg={4}>
            <Thumbnail src="http://via.placeholder.com/300x200">
              <Row>
                <h3>Product One</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </Row>
              <Row>
                <Col xs={6}>
                  <Button bsStyle="info">Info</Button>
                </Col>
                <Col xs={6}>
                  <Button bsStyle="primary">Buy</Button>
                </Col>
              </Row>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <Thumbnail src="http://via.placeholder.com/300x200">
              <Row>
                <h3>Product One</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </Row>
              <Row>
                <Col xs={6}>
                  <Button bsStyle="info">Info</Button>
                </Col>
                <Col xs={6}>
                  <Button bsStyle="primary">Buy</Button>
                </Col>
              </Row>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <Thumbnail src="http://via.placeholder.com/300x200">
              <Row>
                <h3>Product One</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </Row>
              <Row>
                <Col xs={6}>
                  <Button bsStyle="info">Info</Button>
                </Col>
                <Col xs={6}>
                  <Button bsStyle="primary">Buy</Button>
                </Col>
              </Row>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <Thumbnail src="http://via.placeholder.com/300x200">
              <Row>
                <h3>Product One</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </Row>
              <Row>
                <Col xs={6}>
                  <Button bsStyle="info">Info</Button>
                </Col>
                <Col xs={6}>
                  <Button bsStyle="primary">Buy</Button>
                </Col>
              </Row>
            </Thumbnail>
          </Col>
          
        </section>        
      </Row>
    );
  }
}

export default Products;