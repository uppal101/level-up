import * as CONST from '../constants/constants';

export const addedCohort = (state = { fulfilled: false }, action) => {
  switch (action.type) {
    case CONST.ADD_COHORT_FULFILLED:
      return Object.assign({}, { fulfilled: true }, action.payload);
    case CONST.ADD_COHORT_REJECTED:
      return Object.assign({}, { fulfilled: false, error: 'Server Error - Please Try Again' }, action.payload);
    default:
      return state;
  }
};
