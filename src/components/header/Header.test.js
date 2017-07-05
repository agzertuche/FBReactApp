import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from './Header';
import Navigation from './Navigation';

it('Render without crashing', () => {
  shallow(<Header />);
});

it('Render without crashing', () => {
  shallow(<Navigation />);
});