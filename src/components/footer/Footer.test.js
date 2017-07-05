import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('Render without crashing', () => {
  shallow(<Footer />);
});