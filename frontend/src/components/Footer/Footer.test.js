import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('Footer', () => {

  it('should render without crashing', () => {
    shallow(<Footer/>);
  });

  it('should have a linkedIn profile link that opens in new tab', () => {
    const wrapper = shallow(<Footer/>);

    expect(wrapper.find('img').prop('src')).toEqual('linkedin.svg');
    expect(wrapper.find('a').prop('href')).toEqual('https://www.linkedin.com/in/jesus-campos/');
    expect(wrapper.find('a').prop('target')).toEqual('_blank');
  });
});