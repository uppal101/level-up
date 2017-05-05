import axios from 'axios';
import * as CONST from '../constants/constants';

const approveReward = (props) => {
  const url = `/api/requests/${props.id}/admin`;
  return axios.put(url, props);
};

export const approveSelectedReward = props => ({
  type: CONST.APPROVE_REWARD,
  payload: approveReward(props),
});


const denyReward = (props) => {
  const url = `/api/requests/${props.id}/admin`;
  return axios.put(url, props);
};

export const denySelectedReward = props => ({
  type: CONST.DENY_REWARD,
  payload: denyReward(props),
});
