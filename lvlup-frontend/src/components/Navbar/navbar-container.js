import { connect } from 'react-redux';
import { compose } from 'recompose';
import NavBar from './navbar';

const mapStateToProps = state => ({
  adminLoginInfo: state.adminLoginInfo,
  studentLoginInfo: state.studentLoginInfo,
});

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(NavBar);
