import React, {Component} from 'react';
import {Row, Carousel, Image} from 'react-bootstrap';

class Home extends Component{
  render(){
    return(
      <Row className="home">
        <section>
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
        </section>
      </Row>
    );
  }
}

export default Home; 