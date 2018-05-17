import React, {Component} from 'react';
import './Footer.css';
import LinkedInLogo from './linkedin.svg';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a href="https://www.linkedin.com/in/jesus-campos/" target="_blank">
          <img src={LinkedInLogo} className="profile"/>
        </a>
      </div>
    )
  }
}

export default Footer;