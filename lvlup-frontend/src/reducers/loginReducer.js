import initialState from './initialState';

const loggedIn = (state = initialState.loggedIn, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return state;
    case 'LOGIN_FULFILLED':
      return actin.payload.data;
    case 'LOGIN_REJECTED':
      return action.payload;
    default:
      return state;
  }
};

export default loggedIn;
