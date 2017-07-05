import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Products from './Products';

it('Render without crashing', () => {
  shallow(<Products />);
});