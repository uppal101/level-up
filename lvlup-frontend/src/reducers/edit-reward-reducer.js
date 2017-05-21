import * as CONST from '../constants/constants';

export const editedReward = (state = { fulfilled: false }, action) => {
  switch (action.type) {
    case CONST.EDIT_REWARD_FULFILLED:
      return Object.assign({}, { fulfilled: true }, action.payload);
    case CONST.EDIT_REWARD_REJECTED:
      return Object.assign({}, { fulfilled: false, error: 'Server Error - Please Try Again' }, action.payload);
    case CONST.RESET_EDIT_REWARD:
      return Object.assign({}, { fulfilled: false });
    default:
      return state;
  }
};
