import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Home from './Home';

it('Render without crashing', () => {
  shallow(<Home />);
});