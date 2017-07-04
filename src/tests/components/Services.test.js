import React from 'react';
import ReactDOM from 'react-dom';
import Services from '../../components/services';

describe('Services', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Services />, div);
  });
});