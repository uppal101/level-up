import React, { Component } from 'react';
import RewardsTable from './rewards-table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { campusRewards, selectReward } from '../../../../actions/student-rewards-actions';
import { resetEditReward, makeRewardInactive } from '../../../../actions/edit-reward';
import { resetAddReward } from '../../../../actions/add-reward';
import { resetRewardsList } from '../../../../actions/reset-actions';
import { compose, lifecycle } from 'recompose';

const mapStateToProps = state => ({
  adminInfo: state.loggedIn,
  rewards: state.rewards,
});

const mapDispatchToProps = dispatch => bindActionCreators({ campusRewards, selectReward, resetEditReward, resetAddReward, makeRewardInactive, resetRewardsList }, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.campusRewards(this.props.adminInfo.campus_id);
    this.props.resetEditReward();
    this.props.resetAddReward();
  },
});


export default compose(connectToStore, onDidMount)(RewardsTable);
