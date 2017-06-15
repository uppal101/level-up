import React from 'react';
import { bindActionCreators } from 'redux';
import { loggingOutAdmin } from '../../actions/navbar';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import LogOutAdmin from './logout-admin';

const mapDispatchToProps = dispatch => bindActionCreators({ loggingOutAdmin }, dispatch);

const connectToStore = connect(null, mapDispatchToProps);

export default compose(connectToStore)(LogOutAdmin);
