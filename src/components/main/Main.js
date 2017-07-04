import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Services from '../services';
import Products from '../products';
import Contact from '../contact';
import NotFound from '../common/NotFound';
import styled from 'styled-components';

const Container = styled.main`
  margin-top:6em;
`;

class Main extends Component{
  render(){
    return(
      <Container>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/services' component={Services}/>
          <Route path='/products' component={Products}/>
          <Route path='/contact' component={Contact}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Container>
    );
  }
}

export default Main;