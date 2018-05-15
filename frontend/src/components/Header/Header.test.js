import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header/>);
  });

  it('renders an image with the EOS logo', () => {
    const eosLogoSrc = 'header-logo.gif';
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('img').prop('src')).toEqual(eosLogoSrc);
  });

  it('renders text with the app name', () => {
    const appName = 'EOS Block Explorer';
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('.header-title').text()).toEqual(appName);
  });
});