import React, {Component} from 'react';
import './Error.css';

class Error extends Component {
  render() {
    const title = this.props.title || 'An error has occurred';
    const message = this.props.message || 'Please hit \'reload\' on your browser in a minute to try again.';

    return (
      <div className="error">
        <i className="fa fa-exclamation-triangle"/>
        <h1 className="error-title">{title}</h1>
        <p className="error-message">{message}</p>
      </div>
    )
  }
}

export default Error;
