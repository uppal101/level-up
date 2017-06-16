import { connect } from 'react-redux';
import { compose } from 'recompose';
import AdminSignup from './signup';

const mapStateToProps = state => ({
  adminSignup: state.adminSignup,
});

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(AdminSignup);
