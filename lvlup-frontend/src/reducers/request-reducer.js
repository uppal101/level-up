import * as CONST from '../constants/constants';

export const approveSelectedReward = (state = {}, action) => {
  switch (action.type) {
    case CONST.APPROVE_REWARD_FULFILLED:
      return Object.assign({}, { status: 'Approved' }, action.payload);
    default:
      return state;
  }
};

export const denySelectedReward = (state = {}, action) => {
  switch (action.type) {
    case CONST.DENY_REWARD_FULFILLED:
      return Object.assign({}, { status: 'Denied' }, action.payload);
    default:
      return state;
  }
};
