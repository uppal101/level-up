import * as CONST from '../constants/constants';


export const resetPendingSubmissions = () => ({
  type: CONST.RESET_PENDING_SUBMISSIONS,
});

export const resetPendingRequests = () => ({
  type: CONST.RESET_PENDING_REWARDS,
});

export const resetRewardsList = () => ({
  type: CONST.RESET_REWARDS_ADMIN,
});

export const resetChallengeList = () => ({
  type: CONST.RESET_CHALLENGE_ADMIN,
});
