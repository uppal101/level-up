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

export const requestedReward = (state = { fulfilled: false }, action) => {
  switch (action.type) {
    case CONST.REWARD_REQUEST_FULFILLED:
      return Object.assign({}, { fulfilled: true }, action.payload);
    case CONST.REWARD_REQUEST_REJECTED:
      return Object.assign({}, { fulfilled: false, error: 'Server Error - Please Try Again' }, action.payload);
    case CONST.RESET_REQUEST:
      return Object.assign({}, { fulfilled: false });
    default:
      return state;
  }
};

export const requests = (state = { requests: [] }, action) => {
  switch (action.type) {
    case CONST.REQUESTS_FULFILLED:
      return Object.assign({}, state, {
        requests: state.requests.concat(action.payload),
      });
    case CONST.REQUESTS_REJECTED:
      return Object.assign({}, { error: 'Server Error - Please Try Again' }, state);
    default:
      return state;
  }
};

export const rewards = (state = { rewards: [], fetched: false }, action) => {
  switch (action.type) {
    case CONST.REWARDS_CAMPUS_FULFILLED:
      return Object.assign({}, state, {
        rewards: state.rewards.concat(action.payload),
        fetched: true,
      });
    case CONST.REWARDS_CAMPUS_REJECTED:
      return Object.assign({}, { error: 'Server Error - Please Try Again' }, state);
    case CONST.RESET_REWARDS_ADMIN:
      return Object.assign({}, { rewards: [] });
    default:
      return state;
  }
};

export const selectedReward = (state = {}, action) => {
  switch (action.type) {
    case CONST.SELECTED_REWARD:
      return Object.assign({}, state, action.reward);
    default:
      return state;
  }
};
