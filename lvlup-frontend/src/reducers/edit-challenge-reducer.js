import * as CONST from '../constants/constants';

export const editedChallenge = (state = { fulfilled: false }, action) => {
  switch (action.type) {
    case CONST.EDIT_CHALLENGE_FULFILLED:
      return Object.assign({}, { fulfilled: true }, action.payload);
    case CONST.EDIT_CHALLENGE_REJECTED:
      return Object.assign({}, { fulfilled: false, error: 'Server Error - Please Try Again' }, action.payload);
    case CONST.RESET_EDIT_CHALLENGE:
      return Object.assign({}, { fulfilled: false });
    default:
      return state;
  }
};

export const inactiveChallenge = (state = {}, action) => {
  switch (action.type) {
    case CONST.INACTIVE_CHALLENGE_FULFILLED:
      return Object.assign({}, { active: 'Inactive' }, action.payload);
    case CONST.INACTIVE_CHALLENGE_REJECTED:
      return Object.assign({}, { active: 'Inactive', error: 'Server Error - Please Try Again' }, action.payload);
    default:
      return state;
  }
};
