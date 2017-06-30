import React, {Component} from 'react';
import {Grid,Row} from 'react-bootstrap';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  render(){
    return(
      <Grid >
        <Row className="header">
          <Header />
        </Row>
          <Main />
        <Row className="footer">
          <Footer />
        </Row>
      </Grid>
    );
  }
}

export default App;