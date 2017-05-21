import React, { Component } from 'react';
import Form from './email.js';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import { Message } from 'semantic-ui-react';
import './loginview.css';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
});

export class AdminLogin extends Component {
  render() {
    return (
      <div>
        {renderIf(!this.props.loggedIn.status)(
          <div className="login">
            <Form />
            <p id="need-account">
              Need an account?<Link to={'/signup-admin'}> Sign Up</Link>. Valid Galvanize email required. </p>
            {this.props.loggedIn.error ? <p className="errorMessage">{this.props.loggedIn.error}</p> : null}
          </div>)}
        {renderIf(this.props.loggedIn.status && this.props.loggedIn.confirmed)(
          <Redirect to="/admin/dashboard" />,
        )}
        {renderIf(this.props.loggedIn.status && !this.props.loggedIn.confirmed)(
          <div className="alert-message-confirm">
            <Message>
              <Message.Header>
                Please Confirm Your Account
              </Message.Header>
              <p>
                Before logging in to lvl^ please confirm your email address by clicking the link in our email.
                Please check the spam folder if you do not see it. If you think you have reached this page in console.error,
                please contact us at lvlupteam@lvlup.tech;
              </p>
            </Message>
          </div>,
        )}

      </div>
    );
  }
}


export default connect(mapStateToProps)(AdminLogin);
