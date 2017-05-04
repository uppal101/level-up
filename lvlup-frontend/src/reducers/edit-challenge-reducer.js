import initialState from './initialState';

export const challengeEdited = (state = initialState.challengeEdited, action) => {
  switch (action.type) {
    case 'EDIT_CHALLENGE_PENDING':
      return state;
    case 'EDIT_CHALLENGE_FULFILLED':
      return action.payload;
    case 'EDIT_CHALLENGE_REJECTED':
      return action.payload;
    default:
      return state;
  }
};
