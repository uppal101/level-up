import * as CONST from '../constants/constants';

export const loginInfo = (state = { status: false }, action) => {
  switch (action.type) {
    case CONST.STUDENT_LOGIN_FULFILLED:
      return Object.assign({}, { status: true }, action.payload);
    case CONST.STUDENT_LOGIN_REJECTED:
      return Object.assign({}, { status: false, error: 'An Error Occured During Auth from GitHub. Please Try Again' });
    case CONST.STUDENT_SIGNUP_FULFILLED:
      return Object.assign({}, { status: true }, action.payload);
    case CONST.STUDENT_SIGNUP_REJECTED:
      return Object.assign({}, { status: false, error: 'Server Error - Please Try Again' }, action.payload);
    case CONST.STUDENT_LOGOUT_FULFILLED:
      return Object.assign({}, { status: false });
    default:
      return state;
  }
};
export const studentPointsAndCampus = (state = {}, action) => {
  switch (action.type) {
    case CONST.POINTS_COHORT_FULFILLED:
      return Object.assign({}, state, action.payload);
    case CONST.POINTS_COHORT_REJECTED:
      return Object.assign({}, { error: 'Server Error' }, state, action.payload);
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
    case CONST.SUBMISSIONS_REJECTED:
      return Object.assign({}, { error: 'Server Error - Please Try Again' }, state);
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
    case CONST.CHALLENGES_CAMPUS_REJECTED:
      return Object.assign({}, { error: 'Server Error - Please Try Again' }, state);
    case CONST.RESET_CHALLENGE_ADMIN:
      return Object.assign({}, { challenges: [] });
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
    case CONST.REWARDS_CAMPUS_REJECTED:
      return Object.assign({}, { error: 'Server Error - Please Try Again' }, state);
    case CONST.RESET_REWARDS_ADMIN:
      return Object.assign({}, { rewards: [] });
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
    case CONST.REQUESTS_REJECTED:
      return Object.assign({}, { error: 'Server Error - Please Try Again' }, state);
    default:
      return state;
  }
};

export const submittedChallenge = (state = { fulfilled: false }, action) => {
  switch (action.type) {
    case CONST.CHALLENGE_SUBMISSION_FULFILLED:
      return Object.assign({}, { fulfilled: true }, action.payload);
    case CONST.CHALLENGE_SUBMISSION_REJECTED:
      return Object.assign({}, { fulfilled: false, error: 'Server Error - Please Try Again' }, action.payload);
    case CONST.RESET_CHALLENGE:
      return Object.assign({}, { fulfilled: false });
    default:
      return state;
  }
};

export const selectedChallenge = (state = {}, action) => {
  switch (action.type) {
    case CONST.SELECTED_CHALLENGE:
      return Object.assign({}, state, action.challenge);
    case CONST.ADMIN_SUBMISSION_FORM_FULFILLED:
      return Object.assign({}, state, action.payload);
    case CONST.ADMIN_SUBMISSION_FORM_REJECTED:
      return Object.assign({}, { error: 'Server Error - Please Try Again' }, state, action.payload);
    default:
      return state;
  }
};

export const requestedReward = (state = { fulfilled: false }, action) => {
  switch (action.type) {
    case CONST.REWARD_REQUEST_FULFILLED:
      return Object.assign({}, { fulfilled: true }, action.payload);
    case CONST.REWARD_REQUEST_REJECTED:
      return Object.assign({}, { fulfilled: false, error: 'Server Error - Please Try Again' }, action.payload);
    case CONST.RESET_REQUEST:
      return Object.assign({}, { fulfilled: false });
    default:
      return state;
  }
};
