import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { allCampuses } from '../../../../actions/admin-signup';
import { addReward } from '../../../../actions/add-reward';
import { compose, lifecycle } from 'recompose';
import AddRewardForm from './add-reward-form';

const mapDispatchToProps = dispatch => bindActionCreators({
  addReward,
  allCampuses }, dispatch);

const mapStateToProps = state => ({
  addReward: false,
  campuses: state.allCampuses,
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.allCampuses();
  },
});

export default compose(connectToStore, onDidMount)(reduxForm({
  form: 'addReward',
})(AddRewardForm));
