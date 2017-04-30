import initialState from './initialState';

const signedUp = (state = initialState.signedUp, action) => {
  switch (action.type) {
    case 'SIGNUP_PENDING':
      return state;
    case 'SIGNUP_FULFILLED':
      return action.payload;
    case 'SIGNUP_REJECTED':
      return action.payload;
    default:
      return state;
  }
};

export default signedUp;
