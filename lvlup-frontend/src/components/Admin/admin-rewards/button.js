import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './admin-rewards-style.css';


class AddButton extends Component {
  render() {
    return (
      <div className="button">
        <Link to="/admin/reward-add"><Button content="Add Reward" /></Link>
      </div>

    );
  }
}

export default AddButton;
