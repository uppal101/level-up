import initialState from './initialState';

export const challengeEdited = (state = initialState.challengeEdited, action) => {
  switch (action.type) {
    case 'EDIT_REWARD_PENDING':
      return state;
    case 'EDIT_REWARD_FULFILLED':
      return action.payload;
    case 'EDIT_REWARD_REJECTED':
      return action.payload;
    default:
      return state;
  }
};
