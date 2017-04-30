import * as CONST from '../constants/constants';

export const loginInfo = (state = {}, action) => {
  switch (action.type) {
    case CONST.STUDENT_LOGIN_FULFILLED:
      return action.payload;
    default:
      return state;
  }
};
export const studentPointsAndCampus = (state = {}, action) => {
  switch (action.type) {
    case CONST.POINTS_COHORT_FULFILLED:
      return action.payload;
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
    default:
      return state;
  }
};
