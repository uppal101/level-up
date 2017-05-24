import axios from 'axios';
import * as CONST from '../constants/constants';

const postEditedReward = (props) => {
  const url = `/api/rewards/${props.reward_id}`;
  return axios.put(url, props);
};

export const editReward = props => ({
  type: CONST.EDIT_REWARD,
  payload: postEditedReward(props),
});

export const resetEditReward = () => ({
  type: CONST.RESET_EDIT_REWARD,
});

const inactiveReward = (reward) => {
  const url = `/api/rewards/${reward.id}`;
  return axios.put(url, { active: 'Inactive' }).then(res => res.data);
};

export const makeRewardInactive = reward => ({
  type: CONST.INACTIVE_REWARD,
  payload: inactiveReward(reward),
});
