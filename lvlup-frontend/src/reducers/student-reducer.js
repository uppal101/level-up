import * as CONST from '../constants/constants';

export const studentLoginInfo = (state = { status: false }, action) => {
  switch (action.type) {
    case CONST.STUDENT_LOGIN_FULFILLED:
      return Object.assign({}, { status: true }, action.payload);
    case CONST.STUDENT_LOGIN_REJECTED:
      return Object.assign({}, { status: false, error: 'An Error Occured During Auth from GitHub. Please Try Again' });
    case CONST.STUDENT_SIGNUP_FULFILLED:
      return Object.assign({}, { status: true }, action.payload);
    case CONST.STUDENT_SIGNUP_REJECTED:
      return Object.assign({}, { status: false, error: 'Server Error - Please Try Again' }, action.payload);
    case CONST.STUDENT_LOGOUT_FULFILLED:
      return Object.assign({}, { status: false });
    default:
      return state;
  }
};
export const studentPointsAndCampus = (state = {}, action) => {
  switch (action.type) {
    case CONST.POINTS_COHORT_FULFILLED:
      return Object.assign({}, state, action.payload);
    case CONST.POINTS_COHORT_REJECTED:
      return Object.assign({}, { error: 'Server Error' }, state, action.payload);
    default:
      return state;
  }
};
