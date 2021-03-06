import React, { Component } from 'react';
import Form from './email.js';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import './loginview.css';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
});

export class AdminLogin extends Component {
  render() {
    return (
      <div>
        {renderIf(!this.props.loggedIn.username)(
          <div className="login">
            <Form />
            <p id="need-account">
              Need an account?<Link to={'/signup-admin'}> Sign Up</Link>. Valid Galvanize email required. </p>
          </div>)}
        {renderIf(this.props.loggedIn.username)(
          <Redirect to="/admin/dashboard" />,
        )}
      </div>
    );
  }
}


export default connect(mapStateToProps)(AdminLogin);
