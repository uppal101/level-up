import { connect } from 'react-redux';
import { compose } from 'recompose';
import AdminLogin from './login';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
});

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(AdminLogin);
