import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './admin-rewards-style.css';



class AddButton extends Component {
  render() {
    return (
      <div className="button">
        <Button content="Add Reward" />
      </div>

    );
  }
}

export default AddButton;
