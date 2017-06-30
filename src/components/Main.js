import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Products from './Products';
import Contact from './Contact';

class Main extends Component{
  render(){
    return(
      <main className="main">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/services' component={Services}/>
          <Route path='/products' component={Products}/>
          <Route path='/contact' component={Contact}/>                
        </Switch>
      </main>
    );
  }
}

export default Main;