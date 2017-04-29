import React, { Component } from 'react';
import './challenge-submission-style.css';

class Uploads extends Component {
  render() {
    return (
      <div>
        <div className="challenge-submission-form">
          <label>Image Upload 1</label>
          <input type="hidden" role="uploadcare-uploader" name="Image Upload 1" />
        </div>
        <div className="challenge-submission-form">
          <label>Image Upload 2</label>
          <input type="hidden" role="uploadcare-uploader" name="Image Upload 2" />
        </div>
        <div className="challenge-submission-form">
          <label>Image Upload 3</label>
          <input type="hidden" role="uploadcare-uploader" name="Image Upload 3" />
        </div>
      </div>
    );
  }
}

export default Uploads;
