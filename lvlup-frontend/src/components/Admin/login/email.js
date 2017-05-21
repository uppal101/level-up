import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../../actions/admin-login';
import { renderField } from '../admin-common/render-fields';
import { required, email, minValue7 } from '../admin-common/validations';
import './loginview.css';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}
function mapStateToProps(state) {
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
          <Field
            name="email"
            component={renderField}
            type="email"
            label=" Galvanize Email"
            placeholder="Email"
            validate={[required, email]}
          />
        </Form.Field>
        <Form.Field inline>
          <Field
            name="password"
            component={renderField}
            type="password"
            label="Password"
            placeholder="Password"
            validate={[required, minValue7]}
          />
        </Form.Field>
        <div id="admin-login-button">
          <Form.Button basic color="orange">Login</Form.Button>
        </div>
      </Form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'login',
})(LoginForm));
