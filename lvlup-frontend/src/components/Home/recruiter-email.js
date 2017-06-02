import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { renderField } from '../Admin/admin-common/render-fields';
import { required, email } from '../Admin/admin-common/validations';
import { recruiter } from '../../actions/admin-signup';
import renderIf from 'render-if';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ recruiter }, dispatch);
}

function mapStateToProps(state, ownProps) {
  return {
    recruiter: state.recruiter,
  };
}

class RecruiterEmail extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="recruiterEmail" >
        {renderIf(!this.recruiter)(<Form className="email" onSubmit={handleSubmit(this.props.recruiter)}>
          <Form.Field inline>
            <Field
              name="email"
              component={renderField}
              type="email"
              label=" Your E-mail:"
              placeholder="Student login credentials for demo will be sent here"
              validate={[required, email]}
            />
          </Form.Field>
          <Form.Button basic color="orange">Request Login Info</Form.Button>
        </Form>,
      )}
        {renderIf(this.recruiter)(
          <p>Please check your email for GitHub Login Info for the student OAuth</p>,
      )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'recruiter',
})(RecruiterEmail));
