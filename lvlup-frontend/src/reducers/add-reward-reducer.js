import initialState from './initialState';

export const addedReward = (state = initialState.rewardAdded, action) => {
  switch (action.type) {
    case 'ADD_REWARD_PENDING':
      return state;
    case 'ADD_REWARD_FULFILLED':
      return action.payload;
    case 'ADD_REWARD_REJECTED':
      return action.payload;
    default:
      return state;
  }
};
