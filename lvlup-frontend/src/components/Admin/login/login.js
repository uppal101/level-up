import React from 'react';
import LoginForm from './signin-form-container';
import { Link, Redirect } from 'react-router-dom';
import renderIf from 'render-if';
import AdminConfirmMessage from './confirm-admin-message';
import './loginview.css';

const AdminLogin = props => (
  <div>
    {renderIf(!props.adminLoginInfo.status)(
      <div className="login">
        <LoginForm />
        <p id="need-account">Need an account?<Link to={'/signup-admin'}> Sign Up</Link>. Valid Galvanize email required. </p>
        {props.adminLoginInfo.error ? <p className="errorMessage">{props.adminLoginInfo.error}</p> : null}
      </div>)}
    {renderIf(props.adminLoginInfo.status && props.adminLoginInfo.confirmed)(
      <Redirect to="/admin/dashboard" />,
    )}
    {renderIf(props.adminLoginInfo.status && !props.adminLoginInfo.confirmed)(
      <div className="alert-message-confirm">
        <AdminConfirmMessage />
      </div>,
    )}
  </div>
);


export default AdminLogin;
