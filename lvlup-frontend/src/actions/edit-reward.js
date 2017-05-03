import axios from 'axios';

const postEditedReward = (props) => {
  const url = 'http://localhost:3000/api/rewards/:id';
  return axios.put(url, props);
};

export const editReward = props => ({
  type: 'EDIT_REWARD',
  payload: postEditedReward(props),
});
