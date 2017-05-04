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
