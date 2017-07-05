import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Main from './Main';

it('Render without crashing', () => {
  shallow(<Main />);
});