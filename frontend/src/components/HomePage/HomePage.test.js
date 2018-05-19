import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('Block List', () => {

  it('renders without crashing', () => {
    shallow(<HomePage/>);
  });

});