import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('Render without crashing', () => {
  shallow(<App />);
});