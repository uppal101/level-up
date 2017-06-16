import { connect } from 'react-redux';
import { compose } from 'recompose';
import AdminLogin from './login';

const mapStateToProps = state => ({
  adminLoginInfo: state.adminLoginInfo,
});

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(AdminLogin);
