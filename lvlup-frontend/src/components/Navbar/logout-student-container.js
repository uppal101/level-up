import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import LogOutGithub from './logout-student';
import { loggingOutStudent } from '../../actions/navbar';

const mapDispatchToProps = dispatch => bindActionCreators({ loggingOutStudent }, dispatch);

const mapStateToProps = state => ({
  studentLoginInfo: state.studentLoginInfo,
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(LogOutGithub);
