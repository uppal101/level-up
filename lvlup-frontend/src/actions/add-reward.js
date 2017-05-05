import axios from 'axios';
import * as CONST from '../constants/constants';

const postNewReward = (props) => {
  const url = '/api/rewards';
  return axios.post(url, props);
};

export const addReward = props => ({
  type: CONST.ADD_REWARD,
  payload: postNewReward(props),
});

export const resetAddReward = () => ({
  type: CONST.RESET_ADD_REWARD,
});
