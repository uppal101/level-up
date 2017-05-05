import axios from 'axios';
import * as CONST from '../constants/constants';

export const approveSelectedReward = (reward, status) => {
  const url = `/api/requests/${reward.id}/admin`;
  const rewardStatus = {
    reward,
    status,
  };
  const data = axios.put(url, rewardStatus);
  return {
    type: CONST.APPROVE_REWARD,
    payload: data,
  };
};

export const denySelectedReward = (reward, status) => {
  const url = `/api/requests/${reward.id}/admin`;
  const rewardStatus = {
    reward,
    status,
  };
  const data = axios.put(url, rewardStatus);
  return {
    type: CONST.DENY_REWARD,
    payload: data,
  };
};
