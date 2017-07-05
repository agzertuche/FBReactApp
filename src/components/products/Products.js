import React, {Component} from 'react';
import {Row, Col, Thumbnail, Button} from 'react-bootstrap';
import ModalButton from '../common/ModalButton';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';

const Container = styled(Row)`
  padding: 0 2em;

  .thumbnail {
    text-align: center;
  }

  .thumbnail img {
    width: 100%;
  }
`;

class Products extends Component {
  render(){    
    return(
      <Container >
        <Helmet>
          <title>Products</title>
          <meta name="description" content="Products description" />
        </Helmet>
        <Col>
          <h2>Products</h2>
        </Col>        
        <Col xs={12} sm={6} lg={4}>
          <Thumbnail src="http://via.placeholder.com/300x200">
            <Row>
              <h3>Product One</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </Row>
            <Row>
              <Col xs={6}>
                <ModalButton modalTitle="Product One" buttonText="Info" />
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
              <h3>Product Two</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </Row>
            <Row>
              <Col xs={6}>
                <ModalButton modalTitle="Product Two" buttonText="Info" />
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
              <h3>Product Three</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </Row>
            <Row>
              <Col xs={6}>
                <ModalButton modalTitle="Product Three" buttonText="Info" />
              </Col>
              <Col xs={6}>
                <Button bsStyle="primary">Buy</Button>
              </Col>
            </Row>
          </Thumbnail>
        </Col>
      </Container>
    );
  }
}

export default Products;