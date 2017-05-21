import * as CONST from '../constants/constants';

export const addedReward = (state = { fulfilled: false }, action) => {
  switch (action.type) {
    case CONST.ADD_REWARD_FULFILLED:
      return Object.assign({}, { fulfilled: true }, action.payload);
    case CONST.ADD_REWARD_REJECTED:
      return Object.assign({}, { fulfilled: false, error: 'Server Error - Please Try Again' }, action.payload);
    case CONST.RESET_ADD_REWARD:
      return Object.assign({}, { fulfilled: false });
    default:
      return state;
  }
};
