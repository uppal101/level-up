import React from 'react';
import LoginForm from './signin-form-container';
import { Link, Redirect } from 'react-router-dom';
import renderIf from 'render-if';
import AdminConfirmMessage from './confirm-admin-message';
import './loginview.css';

const AdminLogin = props => (
  <div>
    {renderIf(!props.loggedIn.status)(
      <div className="login">
        <LoginForm />
        <p id="need-account">Need an account?<Link to={'/signup-admin'}> Sign Up</Link>. Valid Galvanize email required. </p>
        {props.loggedIn.error ? <p className="errorMessage">{props.loggedIn.error}</p> : null}
      </div>)}
    {renderIf(props.loggedIn.status && props.loggedIn.confirmed)(
      <Redirect to="/admin/dashboard" />,
    )}
    {renderIf(props.loggedIn.status && !props.loggedIn.confirmed)(
      <div className="alert-message-confirm">
        <AdminConfirmMessage />
      </div>,
    )}
  </div>
);


export default AdminLogin;
