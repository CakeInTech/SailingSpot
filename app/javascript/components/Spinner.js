import React, { Component } from 'react';
import '../scss/spinner.scss';

class Spinner extends Component {
  render() {
    return (
      <div className="spinner">
        <div className="spinner-outer"></div>
        <div className="spinner-inner"></div>
      </div>
    );
  }
}

export default Spinner;
