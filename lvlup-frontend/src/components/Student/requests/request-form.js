import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Loader } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { rewardRequest } from '../../../actions/student-rewards-actions';
import { renderTextAreaField } from '../../Admin/admin-common/render-fields';
import './request-styles.css';

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
  reward: state.selectedReward,
});

const mapDispatchToProps = dispatch => bindActionCreators({ rewardRequest }, dispatch);

class RewardRequestForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    values.student_id = this.props.loginInfo.id;
    values.cohort_id = this.props.loginInfo.cohort_id;
    values.category_id = this.props.reward.category_id;
    values.reward_id = this.props.reward.id;
    this.props.rewardRequest(values);
  }

  render() {
    const { handleSubmit } = this.props;
    if (!this.props.reward.name) {
      return <Loader active inline="centered"> Loading </Loader>;
    }
    return (
      <div className="lvl-table">
        <h2 className="header">{`Reward Request: ${this.props.reward.name}  (${this.props.reward.point_cost} pts)`}</h2>
        <Form className="request-form" onSubmit={handleSubmit(this.submit)}>
          <Form.Field inline>
            <Field
              name="notes"
              component={renderTextAreaField}
              label="Notes For Your Request"
              placeholder="Enter any preferences for your reward.."
            />
          </Form.Field>
          <Form.Button basic color="orange">lvl^</Form.Button>
        </Form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'request' })(RewardRequestForm));
