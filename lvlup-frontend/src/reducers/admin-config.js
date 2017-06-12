import * as CONST from '../constants/constants';

export const addedCohort = (state = { fulfilled: false }, action) => {
  switch (action.type) {
    case CONST.ADD_COHORT_FULFILLED:
      return Object.assign({}, { fulfilled: true }, action.payload);
    case CONST.ADD_COHORT_REJECTED:
      return Object.assign({}, { fulfilled: false, error: 'Server Error - Please Try Again' }, action.payload);
    case CONST.RESET_ADD_COHORT:
      return Object.assign({}, { fulfilled: false });
    default:
      return state;
  }
};

export const addAdminCohort = (state = { fulfilled: false }, action) => {
  switch (action.type) {
    case 'ADMIN_COHORT_ADD_FULFILLED':
      return Object.assign({}, { fulfilled: true }, action.payload);
    case CONST.ADMIN_COHORT_ADD_REJECTED:
      return Object.assign({}, { fulfilled: false, error: 'Server Error - Please Try Again' }, action.payload);
    case CONST.RESET_ADMIN_COHORT_ADD:
      return Object.assign({}, { fulfilled: false });
    default:
      return state;
  }
};
