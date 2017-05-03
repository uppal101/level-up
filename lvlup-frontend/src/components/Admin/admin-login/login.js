import React, { Component } from 'react';
import Form from './email.js';
import AdminDashButton from './admin-button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import './loginview.css';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
});

class AdminLogin extends Component {
  render() {
    return (
      <div>
        {renderIf(!this.props.loggedIn.username)(
          <div className="login">
            <Form />
            <p>
              Need an account?<Link to={'/signup-admin'}> Sign Up</Link>. Valid Galvanize email required. </p>
          </div>)}
        {renderIf(this.props.loggedIn.username)(
          <AdminDashButton />,
        )}
      </div>
    );
  }
}


export default connect(mapStateToProps)(AdminLogin);
