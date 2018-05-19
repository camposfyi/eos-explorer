import React from 'react';
import { shallow, mount } from 'enzyme';
import BlockList from './BlockList';
import BlockItem from '../BlockItem/BlockItem';

describe('Block List', () => {
  const headers = ['Height', 'Hash', 'Timestamp', 'Actions'];

  it('should render without crashing', () => {
    shallow(<BlockList blocks={[]} headers={headers}/>);
  });

  it('should display empty message if list of blocks is empty', () => {
    const wrapper = shallow(<BlockList blocks={[]} headers={headers}/>);
    expect(wrapper.find('.no-blocks').length).toEqual(1);
  });

  it('should render the headers', () => {
    const wrapper = shallow(<BlockList blocks={_mockBlocks()} headers={headers}/>);
    expect(wrapper.find('.list-header').length).toEqual(1);
    expect(wrapper.find('.list-header .list-cell').length).toEqual(headers.length);
  });

  xit('should render the blocks', () => {
    const wrapper = shallow(<BlockList blocks={_mockBlocks()} headers={headers}/>);
    const blockItem = React.createElement(BlockItem, {block: {input_transactions: []}});
    expect(wrapper).toContainReact(blockItem);
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