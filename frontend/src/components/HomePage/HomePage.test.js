import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('Block List', () => {

  it('renders without crashing', () => {
    shallow(<HomePage/>);
  });

  // has a load button
  // button is disabled while fetching
  // button shows spinner while fetching
  // button is enabled when not fetching
  // fetches latest blocks on click

  // list has header (height, hash, timpestamp, actions)
  // displays at most 10 blocks
  // shows spinner while fetching
  // shows error message if error occurs on fetch
});