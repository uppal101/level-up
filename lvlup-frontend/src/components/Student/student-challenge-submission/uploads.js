import React, { Component } from 'react';
import './challenge-submission-style.css';

class Uploads extends Component {
  render() {
    return (
      <input type="hidden" role="uploadcare-uploader" name="Image Upload 1" />
    );
  }
}

export default Uploads;
