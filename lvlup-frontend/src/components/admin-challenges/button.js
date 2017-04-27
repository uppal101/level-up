import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './admin-challenges-style.css';



class AddButton extends Component {
  render() {
    return (
      <div className="button">
        <Button content="Add Challenge" />
      </div>

    );
  }
}

export default AddButton;
