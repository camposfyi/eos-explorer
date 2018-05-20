import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';

describe('Error', () => {

  it('should render without crashing', () => {
    shallow(<Error/>);
  });

  it('renders title prop', () => {
    const title = 'A title';
    const wrapper = shallow(<Error title={title} />);
    expect(wrapper.find('.error h1').text()).toEqual(title);
  });

  it('renders message prop', () => {
    const message = 'A message';
    const wrapper = shallow(<Error message={message} />);
    expect(wrapper.find('.error p').text()).toEqual(message);
  });

  it('renders default title if prop not available', () => {
    const wrapper = shallow(<Error />);
    expect(wrapper.find('.error h1').text()).toEqual('An error has occurred');
  });

  it('renders default message if prop not available', () => {
    const wrapper = shallow(<Error />);
    expect(wrapper.find('.error p').text()).toEqual('Please hit \'reload\' on your browser in a minute to try again.');
  });

  it('renders error icon', () => {
    const wrapper = shallow(<Error />);
    expect(wrapper.find('.fa-exclamation-triangle').length).toEqual(1);
  });

});