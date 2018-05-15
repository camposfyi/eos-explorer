import React from 'react';
import ReactDOM from 'react-dom';
// import { shallow, mount } from 'enzyme';
import Spinner from './Spinner';

describe('Spinner', () => {
  let wrapper;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Spinner />, div);
  });

  it('renders with 12 circles', () => {
    // wrapper = shallow(<Spinner />);

    //expect(wrapper.find('img')).to.have.length(1);
  });

});