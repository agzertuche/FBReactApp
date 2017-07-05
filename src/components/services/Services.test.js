import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Services from './Services';

it('Render without crashing', () => {
  shallow(<Services />);
});