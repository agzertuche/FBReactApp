import React, {Component} from 'react';
import {Grid,Row} from 'react-bootstrap';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';

class App extends Component {
  render(){
    return(
      <Grid >
        <Row>
          <Header />
        </Row>
          <Main />
        <Row>
          <Footer />
        </Row>
      </Grid>
    );
  }
}

export default App;