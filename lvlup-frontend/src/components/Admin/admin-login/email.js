import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../../actions/adminlogin';
import './loginview.css';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}
function mapStateToProps(dispatch) {
  return {
    loggedIn: false,
  };
}

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form className="email" onSubmit={handleSubmit(this.props.login)}>
        <Form.Field inline>
          <label>Galvanize Email</label>
          <Field name="email" component="input" type="email" placeholder="Email" />
        </Form.Field>
        <Form.Field inline>
          <label>Password</label>
          <Field name="password" component="input" type="text" placeholder="Password" />
        </Form.Field>
        <Form.Button>Login</Form.Button>
      </Form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'login',
})(LoginForm));
