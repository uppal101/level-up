import React, { Component } from 'react';
import SignupForm from './signup-form-container';
import renderIf from 'render-if';
import SignUpMessage from './signup-message';
import './signupview.css';

const AdminSignup = props => (
  <div>
    {renderIf(!props.signedUp.status)(
      <div className="signup">
        <SignupForm />
        {props.signedUp.error ? <p className="errorMessage">{props.signedUp.error}</p> : null}
      </div>,
    )}
    {renderIf(props.signedUp.status)(
      <div className="signup">
        <SignUpMessage />
      </div>,
    )}
  </div>
);


export default AdminSignup;
