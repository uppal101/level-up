import * as CONST from '../constants/constants';

export const loginInfo = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case CONST.STUDENT_LOGIN_FULFILLED:
      return action.payload;
    default:
      return state;
  }
};
export const logedInOauth = (state = 'not loggedIn', action) => {
  console.log(action);
  switch (action.type) {
    case CONST.STUDENT_LOGGEDIN_FULFILLED:
      return action.payload;
    default:
      return state;
  }
};
