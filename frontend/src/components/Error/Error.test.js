import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';

describe('Error', () => {

  it('should render without crashing', () => {
    shallow(<Error/>);
  });

  it('should display title prop', () => {
    const title = 'A title';
    const wrapper = shallow(<Error title={title} />);
    expect(wrapper.find('.error h1').text()).toEqual(title);
  });

  it('should display message prop', () => {
    const message = 'A message';
    const wrapper = shallow(<Error message={message} />);
    expect(wrapper.find('.error p').text()).toEqual(message);
  });

  it('should display default title if prop not available', () => {
    const wrapper = shallow(<Error />);
    expect(wrapper.find('.error h1').text()).toEqual('An error has occurred');
  });

  it('should display default message if prop not available', () => {
    const wrapper = shallow(<Error />);
    expect(wrapper.find('.error p').text()).toEqual('Please hit \'reload\' on your browser in a minute to try again.');
  });

  it('should display error icon', () => {
    const wrapper = shallow(<Error />);
    expect(wrapper.find('.fa-exclamation-triangle').length).toEqual(1);
  });

});