import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('Footer', () => {

  it('should render without crashing', () => {
    shallow(<Footer/>);
  });

  it('has a linkedIn icon', () => {
    const wrapper = shallow(<Footer/>);
    expect(wrapper.find('img').prop('src')).toEqual('linkedin.svg');
  });

  it('has a link to developer profile', () => {
    const wrapper = shallow(<Footer/>);

    const link = wrapper.find('a');
    expect(link.prop('href')).toEqual('https://www.linkedin.com/in/jesus-campos/');
    expect(link.prop('target')).toEqual('_blank');
  });
});