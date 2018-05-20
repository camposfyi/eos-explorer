import React, {Component} from 'react';
import './Spinner.css';

class Spinner extends Component {

  constructor(props) {
    super(props);
    this.defaultSize = 40;
  }

  render() {
    const size = this.props.size || this.defaultSize;
    const spinnerStyle = { width: size, height: size};
    const textStyle = { fontSize: size / 2,  padding: size / 2 };

    return (
      <div>
        <div className="spinner" style={spinnerStyle}>
          <div className="spinner-dot-1 spinner-dot"/>
          <div className="spinner-dot-2 spinner-dot"/>
          <div className="spinner-dot-3 spinner-dot"/>
          <div className="spinner-dot-4 spinner-dot"/>
          <div className="spinner-dot-5 spinner-dot"/>
          <div className="spinner-dot-6 spinner-dot"/>
          <div className="spinner-dot-7 spinner-dot"/>
          <div className="spinner-dot-8 spinner-dot"/>
          <div className="spinner-dot-9 spinner-dot"/>
          <div className="spinner-dot-10 spinner-dot"/>
          <div className="spinner-dot-11 spinner-dot"/>
          <div className="spinner-dot-12 spinner-dot"/>
        </div>
        <div className="spinner-text" style={textStyle}>
          {this.props.text || ''}
        </div>
      </div>
    );
  }
}

export default Spinner;