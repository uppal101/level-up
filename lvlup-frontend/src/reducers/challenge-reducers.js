import * as CONST from '../constants/constants';
import {
  mergeSort,
  quickSort,
} from '../helpers/sort-date';
import { selectionSort, insertionSortPointsChal } from '../helpers/sort';
import reverse from '../helpers/reverse';

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

export const challenges = (state = { challenges: [], fetched: false }, action) => {
  switch (action.type) {
    case CONST.CHALLENGES_CAMPUS_FULFILLED:
      return Object.assign({}, state, {
        challenges: state.challenges.concat(action.payload),
        fetched: true,
      });
    case CONST.RESET_AFTER_ADDED_CHALLENGE_FULFILLED:
      return Object.assign({}, state, {
        challenges: action.payload,
      });
    case CONST.CHALLENGES_CAMPUS_REJECTED:
      return Object.assign({}, {
        error: 'Server Error - Please Try Again',
      }, state);
    case CONST.RESET_CHALLENGE_ADMIN:
      return Object.assign({}, {
        challenges: [],
      });
    case CONST.SORT_CHALLENGE_TITLE:
      return Object.assign({}, state, {
        challenges: selectionSort(state.challenges, 'name'),
      });
    case CONST.SORT_CHALLENGE_CATEGORY:
      return Object.assign({}, state, {
        challenges: selectionSort(state.challenges, 'category_id'),
      });
    case CONST.SORT_CHALLENGE_POINTS:
      return Object.assign({}, state, {
        challenges: selectionSort(state.challenges, 'point_value'),
      });
    case CONST.SORT_CHALLENGE_TITLE_REVERSE:
      return Object.assign({}, state, {
        challenges: reverse(selectionSort(state.challenges, 'name')),
      });
    case CONST.SORT_CHALLENGE_CATEGORY_REVERSE:
      return Object.assign({}, state, {
        challenges: reverse(selectionSort(state.challenges, 'category_id')),
      });
    case CONST.SORT_CHALLENGE_POINTS_REVERSE:
      return Object.assign({}, state, {
        challenges: reverse(selectionSort(state.challenges, 'point_value')),
      });
    default:
      return state;
  }
};

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

export const selectedChallenge = (state = {}, action) => {
  switch (action.type) {
    case CONST.SELECTED_CHALLENGE:
      return Object.assign({}, state, action.challenge);
    case CONST.ADMIN_SUBMISSION_FORM_FULFILLED:
      return Object.assign({}, state, action.payload);
    case CONST.ADMIN_SUBMISSION_FORM_REJECTED:
      return Object.assign({}, { error: 'Server Error - Please Try Again' }, state, action.payload);
    default:
      return state;
  }
};

export const submissions = (state = { submissions: [] }, action) => {
  switch (action.type) {
    case CONST.SUBMISSIONS_FULFILLED:
      return Object.assign({}, state, {
        submissions: state.submissions.concat(action.payload),
      });
    case CONST.SUBMISSIONS_REJECTED:
      return Object.assign({}, { error: 'Server Error - Please Try Again' }, state);
    case CONST.SORT_SUBMISSIONS_CHRONO:
      return { ...state, submissions: mergeSort(state.submissions) };
    case CONST.SORT_SUBMISSIONS_REV_CHRONO:
      return { ...state, submissions: reverse(quickSort(state.submissions)) };
    case CONST.SORT_SUBMISSIONS_ASC:
      return { ...state, submissions: insertionSortPointsChal(state.submissions) };
    case CONST.SORT_SUBMISSIONS_DESC:
      return { ...state, submissions: reverse(insertionSortPointsChal(state.submissions)) };
    default:
      return state;
  }
};

export const submittedChallenge = (state = { fulfilled: false }, action) => {
  switch (action.type) {
    case CONST.CHALLENGE_SUBMISSION_FULFILLED:
      return Object.assign({}, { fulfilled: true }, action.payload);
    case CONST.CHALLENGE_SUBMISSION_REJECTED:
      return Object.assign({}, { fulfilled: false, error: 'Server Error - Please Try Again' }, action.payload);
    case CONST.RESET_CHALLENGE:
      return Object.assign({}, { fulfilled: false });
    default:
      return state;
  }
};
