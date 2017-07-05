import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import About from './About';

it('Render without crashing', () => {
  shallow(<About />);
});