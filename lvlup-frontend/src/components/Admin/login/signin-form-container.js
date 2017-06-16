import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { login } from '../../../actions/admin-login';
import LoginForm from './email';

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);

const mapStateToProps = state => ({
  adminLoginInfo: false,
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(reduxForm({
  form: 'login',
})(LoginForm));
