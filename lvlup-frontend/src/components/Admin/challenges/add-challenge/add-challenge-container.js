import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import AddChallengeForm from './add-challenge-form';
import { allCampuses } from '../../../../actions/admin-signup';
import { addChallenge } from '../../../../actions/add-challenge';

const mapStateToProps = state => ({
  addChallenge: false,
  campuses: state.allCampuses,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addChallenge,
  allCampuses }, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.allCampuses();
  },
});

export default compose(connectToStore, onDidMount)(reduxForm({
  form: 'addChallenge',
})(AddChallengeForm));
