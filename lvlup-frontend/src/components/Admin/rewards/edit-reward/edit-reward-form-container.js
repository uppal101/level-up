import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { allCampuses } from '../../../../actions/admin-signup';
import { editReward } from '../../../../actions/edit-reward';
import EditRewardForm from './edit-reward-form';
const onDidMount = lifecycle({
  componentDidMount() {
    this.props.allCampuses();
  },
});

const connectToStore = connect(
  state => ({
    campuses: state.allCampuses,
    reward: state.selectedReward,
    initialValues: {
      name: state.selectedReward.name,
      point_cost: state.selectedReward.point_cost,
      campus_id: state.selectedReward.campus_id,
      category_id: state.selectedReward.category_id,
      description: state.selectedReward.description,
    },
  }), { editReward, allCampuses },
);
export default compose(connectToStore, onDidMount)(reduxForm({
  form: 'editReward',
})(EditRewardForm));
