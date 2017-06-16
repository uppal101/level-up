import axios from 'axios';
import * as CONST from '../constants/constants';

const fetchRewards = campusId => axios(`/api/rewards/campuses/${campusId}`).then(response => response.data);

const rewardRequestCall = (props) => {
  const url = '/api/requests';
  return axios.post(url, props);
};

export const campusRewards = campusId => ({
  type: CONST.REWARDS_CAMPUS,
  payload: fetchRewards(campusId),
});

export const resetCampusRewards = campusId => ({
  type: CONST.RESET_AFTER_ADDED_REWARD,
  payload: fetchRewards(campusId),
});

export const selectReward = reward => ({
  type: CONST.SELECTED_REWARD,
  reward,
});

export const resetRequest = () => ({
  type: CONST.RESET_REQUEST,
});

export const rewardRequest = props => ({
  type: CONST.REWARD_REQUEST,
  payload: rewardRequestCall(props),
});
