import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import LogOutAdmin from './logout-admin';
import { loggingOutAdmin } from '../../actions/navbar';

const mapDispatchToProps = dispatch => bindActionCreators({ loggingOutAdmin }, dispatch);

const connectToStore = connect(null, mapDispatchToProps);

export default compose(connectToStore)(LogOutAdmin);
