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

export const approveSelectedReward = (state = {}, action) => {
  switch (action.type) {
    case CONST.APPROVE_REWARD_FULFILLED:
      return Object.assign({}, { status: 'Approved' }, action.payload);
    case CONST.APPROVE_REWARD_REJECTED:
      return Object.assign({}, { status: 'Pending', error: 'Server Error - Please Try Again' }, action.payload);
    default:
      return state;
  }
};

export const denySelectedReward = (state = {}, action) => {
  switch (action.type) {
    case CONST.DENY_REWARD_FULFILLED:
      return Object.assign({}, { status: 'Denied' }, action.payload);
    case CONST.DENY_REWARD_REJECTED:
      return Object.assign({}, { status: 'Pending', error: 'Server Error - Please Try Again' }, action.payload);
    default:
      return state;
  }
};

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

export const inactiveReward = (state = {}, action) => {
  switch (action.type) {
    case CONST.INACTIVE_REWARD_FULFILLED:
      return Object.assign({}, { active: false }, action.payload);
    case CONST.INACTIVE_REWARD_REJECTED:
      return Object.assign({}, { active: false, error: 'Server Error - Please Try Again' }, action.payload);
    default:
      return state;
  }
};
