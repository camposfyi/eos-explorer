import React from 'react';
import { shallow } from 'enzyme';
import BlockList from './BlockList';

describe('Block List', () => {
  const headers = ['Height', 'Hash', 'Timestamp', 'Actions'];

  it('renders without crashing', () => {
    shallow(<BlockList blocks={[]} headers={headers}/>);
  });

  it('renders empty message if list of blocks is empty', () => {
    const wrapper = shallow(<BlockList blocks={[]} headers={headers}/>);
    expect(wrapper.find('.no-blocks').length).toEqual(1);
  });

  it('renders the headers', () => {
    const wrapper = shallow(<BlockList blocks={_mockBlocks()} headers={headers}/>);
    expect(wrapper.find('.list-header').length).toEqual(1);
    expect(wrapper.find('.list-header .list-cell').length).toEqual(headers.length);
  });

  function _mockBlocks() {
    const blocks = [];
    for(let i=1; i<=10; i++) {
      blocks.push({
        block_num: i,
      });
    }
    return blocks;
  }
});