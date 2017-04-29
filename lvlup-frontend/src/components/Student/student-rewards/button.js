import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './student-rewards-style.css';

class AddButton extends Component {
  render() {
    return (
      <div className="button">
        <a href="/admin/reward-add"><Button content="Add Reward" /></a>
      </div>

    );
  }
}

export default AddButton;
