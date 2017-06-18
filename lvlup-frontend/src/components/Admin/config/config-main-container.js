import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetAddCohort, resetAdminCohort } from '../../../actions/admin-config';
import AdminConfiguration from './config-main';

const mapDispatchToProps = dispatch => bindActionCreators({
  resetAddCohort,
  resetAdminCohort }, dispatch);

const connectToStore = connect(null, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.resetAddCohort();
    this.props.resetAdminCohort();
  },
});

export default compose(connectToStore, onDidMount)(AdminConfiguration);
