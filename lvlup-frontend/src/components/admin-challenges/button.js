import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './admin-challenges-style.css';



class AddButton extends Component {
  render() {
    return (
      <div className="button">
        <a href="/admin/challenge-add"><Button content="Add Challenge" /></a>
      </div>

    );
  }
}

export default AddButton;
