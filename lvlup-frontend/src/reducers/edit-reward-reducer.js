import * as CONST from '../constants/constants';

export const editedReward = (state = { fulfilled: false }, action) => {
  switch (action.type) {
    case CONST.EDIT_REWARD_FULFILLED:
      return Object.assign({}, { fulfilled: true }, action.payload);
    case CONST.EDIT_REWARD_REJECTED:
      return Object.assign({}, { fulfilled: false }, action.payload);
    default:
      return state;
  }
};
