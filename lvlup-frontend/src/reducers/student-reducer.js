import * as CONST from '../constants/constants';

export const loginInfo = (state = {}, action) => {
  switch (action.type) {
    case CONST.STUDENT_LOGIN_FULFILLED:
      return action.payload;
    default:
      return state;
  }
};
export const studentPointsAndCampus = (state = {}, action) => {
  switch (action.type) {
    case CONST.POINTS_COHORT_FULFILLED:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export const selectedReward = (state = {}, action) => {
  switch (action.type) {
    case CONST.SELECTED_REWARD:
      return Object.assign({}, state, action.reward);
    default:
      return state;
  }
};

export const submissions = (state = { submissions: [] }, action) => {
  switch (action.type) {
    case CONST.SUBMISSIONS_FULFILLED:
      return Object.assign({}, state, {
        submissions: state.submissions.concat(action.payload),
      });
    default:
      return state;
  }
};


export const challenges = (state = { challenges: [] }, action) => {
  switch (action.type) {
    case CONST.CHALLENGES_CAMPUS_FULFILLED:
      return Object.assign({}, state, {
        challenges: state.challenges.concat(action.payload),
      });
    default:
      return state;
  }
};

export const rewards = (state = { rewards: [] }, action) => {
  switch (action.type) {
    case CONST.REWARDS_CAMPUS_FULFILLED:
      return Object.assign({}, state, {
        rewards: state.rewards.concat(action.payload),
      });
    default:
      return state;
  }
};

export const requests = (state = { requests: [] }, action) => {
  switch (action.type) {
    case CONST.REQUESTS_FULFILLED:
      return Object.assign({}, state, {
        requests: state.requests.concat(action.payload),
      });
    default:
      return state;
  }
};

export const submissionChallenge = (state = { status: false }, action) => {
  switch (action.type) {
    case CONST.CHALLENGE_SUBMISSION_FULFILLED:
      return action.payload;
    default:
      return state;
  }
};

export const selectedChallenge = (state = {}, action) => {
  switch (action.type) {
    case CONST.SELECTED_CHALLENGE:
      return Object.assign({}, state, action.challenge);
    default:
      return state;
  }
};

export const requestedReward = (state = { fulfilled: false }, action) => {
  switch (action.type) {
    case CONST.REWARD_REQUEST_FULFILLED:
      return Object.assign({}, { fulfilled: true }, action.payload);
    default:
      return state;
  }
};
