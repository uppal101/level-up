import axios from 'axios';

const postNewReward = (props) => {
  const url = '/api/rewards';
  return axios.post(url, props);
};

export const addReward = props => ({
  type: 'ADD_REWARD',
  payload: postNewReward(props),
});
