import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';

describe('Error', () => {

  it('should render without crashing', () => {
    shallow(<Error/>);
  });

});