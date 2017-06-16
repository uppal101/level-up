import { studentLoginInfo, studentPointsAndCampus, selectedReward, submissions, challenges, rewards, requests, submittedChallenge, selectedChallenge, requestedReward } from '../src/reducers/student-reducer';
import * as CONST from '../src/constants/constants';


describe('student login reducer', () => {
  it('should return the initial state', () => {
    expect(studentLoginInfo(undefined, {})).toEqual({ status: false });
  });

  it('should return a new state with the logged in user', () => {
    const prevState = { status: false };
    const nextState = studentLoginInfo(prevState, { type: CONST.STUDENT_LOGIN_FULFILLED, id: 2, email: 'sanjeet.uppal92@gmail.com' });
    expect(nextState).toEqual({ status: true });
  });

  it('should return a new state with the signed in user', () => {
    const prevState = { status: false };
    const nextState = studentLoginInfo(prevState, { type: CONST.STUDENT_SIGNUP_FULFILLED, name: 'Sanjeet Uppal', email: 'uppal101@mail.chapman.edu', cohort_id: 1, username: 'uppal101' });
    expect(nextState).toEqual({ status: true });
  });

  it('should return a new state with a logged out user', () => {
    const prevState = { status: true };
    const nextState = studentLoginInfo(prevState, { type: CONST.STUDENT_LOGOUT_FULFILLED, id: 2, email: 'sanjeet.uppal92@gmail.com' });
    expect(nextState).toEqual({ status: false });
  });
});

describe('student points and campus reducer', () => {
  it('should return the initial state', () => {
    expect(studentPointsAndCampus(undefined, {})).toEqual({});
  });

  it('should return a new state with the students points and campus', () => {
    const prevState = {};
    const nextState = studentPointsAndCampus(prevState, { type: CONST.POINTS_COHORT_FULFILLED, payload: { test: 1 } });
    expect(nextState).toEqual({ test: 1 });
  });
});

describe('selected reward reducer', () => {
  it('should return the initial state', () => {
    expect(selectedReward(undefined, {})).toEqual({});
  });

  it('should return a new state with the selected reward', () => {
    const prevState = {};
    const nextState = selectedReward(prevState, { type: CONST.SELECTED_REWARD, reward: { test: 2 } });
    expect(nextState).toEqual({ test: 2 });
  });
});

describe('submissions reducer', () => {
  it('should return the initial state', () => {
    expect(submissions(undefined, {})).toEqual({ submissions: [] });
  });

  it('should return a new state with the submission', () => {
    const prevState = { submissions: [] };
    const nextState = submissions(prevState, { type: CONST.SUBMISSIONS_FULFILLED, payload: [{ test: 10 }] });

    expect(nextState).toEqual({ submissions: [{ test: 10 }] });
  });
});

describe('challenges reducer', () => {
  it('should return the initial state', () => {
    expect(challenges(undefined, {})).toEqual({ challenges: [] });
  });

  it('should return a new state with the challenge', () => {
    const prevState = { challenges: [] };
    const nextState = challenges(prevState, { type: CONST.CHALLENGES_CAMPUS_FULFILLED, payload: [{ test: 9 }] });

    expect(nextState).toEqual({ challenges: [{ test: 9 }] });
  });
});

describe('rewards reducer', () => {
  it('should return the initial state', () => {
    expect(rewards(undefined, {})).toEqual({ rewards: [] });
  });

  it('should return a new state with the reward', () => {
    const prevState = { rewards: [] };
    const nextState = rewards(prevState, { type: CONST.REWARDS_CAMPUS_FULFILLED, payload: [{ test: 8 }] });

    expect(nextState).toEqual({ rewards: [{ test: 8 }] });
  });
});

describe('requests reducer', () => {
  it('should return the initial state', () => {
    expect(requests(undefined, {})).toEqual({ requests: [] });
  });

  it('should return a new state with the request', () => {
    const prevState = { requests: [] };
    const nextState = requests(prevState, { type: CONST.REQUESTS_FULFILLED, payload: [{ test: 4 }] });
    expect(nextState).toEqual({ requests: [{ test: 4 }] });
  });
});

describe('submitted challenge reducer', () => {
  it('should return the initial state', () => {
    expect(submittedChallenge(undefined, {})).toEqual({ fulfilled: false });
  });

  it('should return a new state with the submitted challenge', () => {
    const prevState = { fulfilled: false };
    const nextState = submittedChallenge(prevState, { type: CONST.CHALLENGE_SUBMISSION_FULFILLED, test: 5 });
    expect(nextState).toEqual({ fulfilled: true });
  });
});

describe('selected challenge reducer', () => {
  it('should return the initial state', () => {
    expect(selectedChallenge(undefined, {})).toEqual({});
  });

  it('should return a new state with the selected challenge', () => {
    const prevState = {};
    const nextState = selectedChallenge(prevState, { type: CONST.SELECTED_CHALLENGE, challenge: { test: 6 } });
    expect(nextState).toEqual({ test: 6 });
  });

  it('should return a new state with the submission form', () => {
    const prevState = {};
    const nextState = selectedChallenge(prevState, { type: CONST.ADMIN_SUBMISSION_FORM_FULFILLED, payload: { test: 7 } });
    expect(nextState).toEqual({ test: 7 });
  });
});

describe('requested reward reducer', () => {
  it('should return the initial state', () => {
    expect(requestedReward(undefined, {})).toEqual({ fulfilled: false });
  });

  it('should return a new state with the requested reward', () => {
    const prevState = { fulfilled: false };
    const nextState = requestedReward(prevState, { type: CONST.REWARD_REQUEST_FULFILLED, student_id: 2, reward_id: 11, cohort_id: 1, notes: 'envelope please', category_id: 4 });
    expect(nextState).toEqual({ fulfilled: true });
  });
});
