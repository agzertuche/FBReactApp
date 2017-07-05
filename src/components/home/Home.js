import React, {Component} from 'react';
import {Row, Carousel, Image} from 'react-bootstrap';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';

const Container = styled(Row)`
`;

class Home extends Component{
  render(){
    return(
      <Container>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Home description" />
        </Helmet>
        <Carousel>  
          <Carousel.Item active>
            <Image src="http://via.placeholder.com/1200x600"/>
            <Carousel.Caption>
              <h3>First slide</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="http://via.placeholder.com/1200x600"/>
            <Carousel.Caption>
              <h3>First slide</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="http://via.placeholder.com/1200x600"/>
            <Carousel.Caption>
              <h3>First slide</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default Home; 