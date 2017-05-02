import initialState from './initialState';

export const challengeAdded = (state = initialState.challengeAdded, action) => {
  switch (action.type) {
    case 'ADD_CHALLENGE_PENDING':
      return state;
    case 'ADD_CHALLENGE_FULFILLED':
      return action.payload;
    case 'ADD_CHALLENGE_REJECTED':
      return action.payload;
    default:
      return state;
  }
};
