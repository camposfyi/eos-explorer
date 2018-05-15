import React, {Component} from 'react';
import logo from './header-logo.gif';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header text-center">
        <img src={logo} className="header-logo" alt="EOS" />
        <h1 className="header-title">EOS Block Explorer</h1>
      </header>
    )
  }
}

export default Header;