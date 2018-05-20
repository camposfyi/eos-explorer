import React from 'react';
import BlockItem from './BlockItem';
import { shallow } from 'enzyme';

describe('Block Item', () => {
  const block = {
    block_num: '123',
    id: '0000097ca69c429cf3e96b4a1834a7a43b',
    timestamp: '2018-05-20T05:12:03.500',
    input_transactions: []
  };

  it('renders without crashing', () => {
    shallow(<BlockItem block={block}/>);
  });

  it('renders the properties of the block', () => {
    const wrapper = shallow(<BlockItem block={block}/>);
    expect(wrapper.find('.list-cell').length).toEqual(4);
  });

  it('renders the block number in column #1', () => {
    const wrapper = shallow(<BlockItem block={block}/>);
    expect(wrapper.find('.list-cell').at(0).text()).toEqual(block.block_num);
  });

  it('renders the block hash in column #2', () => {
    const wrapper = shallow(<BlockItem block={block}/>);
    expect(wrapper.find('.list-cell').at(1).text()).toEqual(block.id);
  });

  it('renders the block timestamp in column #3', () => {
    const wrapper = shallow(<BlockItem block={block}/>);
    expect(wrapper.find('.list-cell').at(2).text()).toEqual(block.timestamp);
  });

  it('renders the number of actions in column #4', () => {
    const wrapper = shallow(<BlockItem block={block}/>);
    expect(wrapper.find('.list-cell').at(3).text()).toEqual(block.input_transactions.length.toString());
  });

  it('has initial state of collapsed', () => {
    const wrapper = shallow(<BlockItem block={block}/>);
    expect(wrapper.state().rawBlockVisible).toEqual(false);
  });

  it('expands when clicked if collapsed', () => {
    const wrapper = shallow(<BlockItem block={block}/>);
    wrapper.find('.list-row').simulate('click');
    expect(wrapper.state().rawBlockVisible).toEqual(true);
  });

  it('collapses when clicked if expanded', () => {
    const wrapper = shallow(<BlockItem block={block}/>);
    wrapper.state().rawBlockVisible = true;

    wrapper.find('.list-row').simulate('click');
    expect(wrapper.state().rawBlockVisible).toEqual(false);
  });

});