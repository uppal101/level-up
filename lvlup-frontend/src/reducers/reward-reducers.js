import * as CONST from '../constants/constants';
import {
  mergeSort,
  quickSort,
} from '../helpers/sort-date';
import { selectionSort, insertionSortPointsReward } from '../helpers/sort';
import reverse from '../helpers/reverse';

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
    case CONST.SORT_REQUESTS_CHRONO:
      return { ...state, requests: mergeSort(state.requests) };
    case CONST.SORT_REQUESTS_REV_CHRONO:
      return { ...state, requests: quickSort(state.requests) };
    case CONST.SORT_REWARDS_ASC:
      return { ...state, requests: insertionSortPointsReward(state.requests) };
    case CONST.SORT_REWARDS_DESC:
      return { ...state, requests: reverse(insertionSortPointsReward(state.requests)) };
    case CONST.SORT_REWARDS_CHRONO:
      return { ...state, requests: mergeSort(state.requests) };
    case CONST.SORT_REWARDS_REV_CHRONO:
      return { ...state, requests: reverse(quickSort(state.requests)) };
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
    case CONST.RESET_AFTER_ADDED_REWARD_FULFILLED:
      return Object.assign({}, state, {
        rewards: action.payload,
      });
    case CONST.REWARDS_CAMPUS_REJECTED:
      return Object.assign({}, { error: 'Server Error - Please Try Again' }, state);
    case CONST.RESET_REWARDS_ADMIN:
      return Object.assign({}, { rewards: [] });
    case CONST.SORT_REWARD_TITLE:
      return Object.assign({}, state, {
        rewards: selectionSort(state.rewards, 'name'),
      });
    case CONST.SORT_REWARD_CATEGORY:
      return Object.assign({}, state, {
        rewards: selectionSort(state.rewards, 'category_id'),
      });
    case CONST.SORT_REWARD_POINTS:
      return Object.assign({}, state, {
        rewards: selectionSort(state.rewards, 'point_cost'),
      });
    case CONST.SORT_REWARD_TITLE_REVERSE:
      return Object.assign({}, state, {
        rewards: reverse(selectionSort(state.rewards, 'name')),
      });
    case CONST.SORT_REWARD_CATEGORY_REVERSE:
      return Object.assign({}, state, {
        rewards: reverse(selectionSort(state.rewards, 'category_id')),
      });
    case CONST.SORT_REWARD_POINTS_REVERSE:
      return Object.assign({}, state, {
        rewards: reverse(selectionSort(state.rewards, 'point_cost')),
      });
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
