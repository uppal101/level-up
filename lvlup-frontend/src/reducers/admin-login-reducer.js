import initialState from './initialState';

export const loggedIn = (state = initialState.loggedIn, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return state;
    case 'LOGIN_FULFILLED':
      return action.payload;
    case 'LOGIN_REJECTED':
      return action.payload;
    default:
      return state;
  }
};
