import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ModalButton from './ModalButton';
import NotFound from './NotFound';

it('Render without crashing', () => {
  shallow(<ModalButton />);
});

it('Render without crashing', () => {
  shallow(<NotFound />);
});