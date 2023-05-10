import React, { Component } from 'react';
import '../css/spinner.css';

class Spinner extends Component {
  render() {
    return (
      <div class="spinner">
        <div class="spinner-outer"></div>
        <div class="spinner-inner"></div>
      </div>
    );
  }
}

export default Spinner;
