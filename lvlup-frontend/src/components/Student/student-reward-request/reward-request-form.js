import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { rewardRequest } from '../../../actions/student-rewards-actions';
import './reward-request-style.css';

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
  reward: state.selectedReward,
});

const mapDispatchToProps = dispatch => bindActionCreators({ rewardRequest }, dispatch);

const renderTextAreaField = ({ placeholder, input, label, type }) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} placeholder={placeholder} type={type} />
    </div>
  </div>
);

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
    console.log(values);
    this.props.rewardRequest(values);
  }

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props.reward);
    if (!this.props.reward.name) {
      return (<div>LOADING</div>);
    }
    return (
      <div className="reward-request">
        <h2 className="header">{`Reward Request: ${this.props.reward.name}  (${this.props.reward.point_cost} pts)`}</h2>
        <Form className="reward-request-form" onSubmit={handleSubmit(this.submit)}>
          <Form.Field inline>
            <Field
              name="notes"
              component={renderTextAreaField}
              label="Notes For Your Request"
              placeholder="Enter any preferences for your reward.."
            />
          </Form.Field>
          <Form.Button>lvl^</Form.Button>
        </Form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'request' })(RewardRequestForm));
