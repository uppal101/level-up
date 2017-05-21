import initialState from './initialState';
import * as CONST from '../constants/constants';

export const signedUp = (state = initialState.signedUp, action) => {
  switch (action.type) {
    case CONST.ADMIN_SIGNUP_PENDING:
      return state;
    case CONST.ADMIN_SIGNUP_FULFILLED:
      return action.payload;
    case CONST.ADMIN_SIGNUP_REJECTED:
      return Object.assign({}, { status: false, error: 'Please check that you have filled out all the required fields' }, action.payload);
    default:
      return state;
  }
};

export const allCampuses = (state = [], action) => {
  switch (action.type) {
    case CONST.ALL_CAMPUSES_PENDING :
      return state;
    case CONST.ALL_CAMPUSES_FULFILLED:
      return action.payload;
    case CONST.ALL_CAMPUSES_REJECTED:
      return Object.assign({}, { error: 'Server Error - Please Try Again' }, action.payload);
    default:
      return state;
  }
};

export const allCohorts = (state = [], action) => {
  switch (action.type) {
    case CONST.ALL_COHORTS_PENDING:
      return state;
    case CONST.ALL_COHORTS_FULFILLED:
      return action.payload;
    case CONST.ALL_COHORTS_REJECTED:
      return Object.assign({}, { error: 'Server Error - Please Try Again' }, action.payload);
    default:
      return state;
  }
};

export const setCampus = (state = '', action) => {
  switch (action.type) {
    case CONST.SET_CAMPUSES:
      return action.campus;
    default:
      return state;
  }
};

export const setCohort = (state = '', action) => {
  switch (action.type) {
    case CONST.SET_COHORT:
      return action.cohort;
    default:
      return state;
  }
};
