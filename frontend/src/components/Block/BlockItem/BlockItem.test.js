import React from 'react';
import BlockItem from './BlockItem';
import { shallow } from 'enzyme';

describe('Block Item', () => {
  const block = {
    input_transactions: []
  };

  it('renders without crashing', () => {
    shallow(<BlockItem block={block}/>);
  });

  // displays (height, hash, timpestamp, actions)
  // expands on click if closed
  // closes on click if opened
  // request block when opened
  // shows spinner while fetching block
  // shows error message if error occurs on fetch


});