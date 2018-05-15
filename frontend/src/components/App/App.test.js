import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from "../Header/Header";
import 'jest-enzyme';
import BlockList from "../BlockList/BlockList";
import Footer from "../Footer/Footer";


describe('App', () => {

  it('should render without crashing', () => {
    shallow(<App/>);
  });

  it('should render a header', () => {
    const wrapper = shallow(<App />);
    const header = React.createElement(Header);
    expect(wrapper).toContainReact(header);
  });

  it('should render a list of blocks', () => {
    const wrapper = shallow(<App/>);
    const blockList = React.createElement(BlockList);
    expect(wrapper).toContainReact(blockList);
  });

  it('should render a footer', () => {
    const wrapper = shallow(<App/>);
    const footer = React.createElement(Footer);
    expect(wrapper).toContainReact(footer);
  });


  // has an apollo client
  // has a list of blocks
  // has a footer

});
