import * as CONST from '../constants/constants';

export const loginInfo = (state = {}, action) => {
  switch (action.type) {
    case CONST.STUDENT_LOGIN_FULFILLED:
      return action.payload;
    default:
      return state;
  }
};

export const loggedIn = (state = 'not logged in', action) => {
  switch (action.type) {
    case CONST.STUDENT_LOGGEDIN:
      return 'logged in student';
    case CONST.ADMIN_LOGGEDIN:
      return 'logged in admin';
    default:
      return state;
  }
};
