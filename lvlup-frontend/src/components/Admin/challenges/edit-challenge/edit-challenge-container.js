import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import EditChallengeForm from './edit-challenge-form';
import { allCampuses } from '../../../../actions/admin-signup';
import { editChallenge } from '../../../../actions/edit-challenge';

const connectToStore = connect(
  state => ({
    campuses: state.allCampuses,
    challenge: state.selectedChallenge,
    initialValues: {
      id: state.selectedChallenge.id,
      name: state.selectedChallenge.name,
      point_value: state.selectedChallenge.point_value,
      campus_id: state.selectedChallenge.campus_id,
      category_id: state.selectedChallenge.category_id,
      description: state.selectedChallenge.description,
      requirements_1: state.selectedChallenge.requirements_1 ? state.selectedChallenge.requirements_1 : '',
      requirements_2: state.selectedChallenge.requirements_2 ? state.selectedChallenge.requirements_2 : '',
      requirements_3: state.selectedChallenge.requirements_3 ? state.selectedChallenge.requirements_3 : '',
      requirements_4: state.selectedChallenge.requirements_4 ? state.selectedChallenge.requirements_4 : '',
      requirements_5: state.selectedChallenge.requirements_5 ? state.selectedChallenge.requirements_5 : '',
    },
  }), { editChallenge, allCampuses  },
);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.allCampuses();
  },
});

export default compose(connectToStore, onDidMount)(reduxForm({
  form: 'editChallenge',
})(EditChallengeForm));
