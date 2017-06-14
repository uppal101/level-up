import * as CONST from '../constants/constants';

export const addedChallenge = (state = { fulfilled: false }, action) => {
  switch (action.type) {
    case CONST.ADD_CHALLENGE_FULFILLED:
      return Object.assign({}, { fulfilled: true }, action.payload);
    case CONST.ADD_CHALLENGE_REJECTED:
      return Object.assign({}, { fulfilled: false, error: 'Server Error - Please Try Again' }, action.payload);
    case CONST.RESET_ADD_CHALLENGE:
      return Object.assign({}, { fulfilled: false });
    default:
      return state;
  }
};
