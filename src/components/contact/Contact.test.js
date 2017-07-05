import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Contact from './Contact';

it('Render without crashing', () => {
  shallow(<Contact />);
});