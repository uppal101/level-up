import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './admin-challenges-style.css';


class AddButton extends Component {
  render() {
    return (
      <div className="button">
        <Link to="/admin/challenge-add"><Button content="Add Challenge" /></Link>
      </div>

    );
  }
}

export default AddButton;
