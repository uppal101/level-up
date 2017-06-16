import * as CONST from '../constants/constants';

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

export const recruiterDemo = (state = { fulfilled: false }, action) => {
  switch (action.type) {
    case CONST.RECRUITER_FULFILLED:
      return Object.assign({}, { fulfilled: true }, action.payload);
    default:
      return state;
  }
};
