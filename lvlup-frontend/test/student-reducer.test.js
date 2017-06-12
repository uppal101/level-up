import { loginInfo, studentPointsAndCampus, selectedReward, submissions, challenges, rewards, requests, submittedChallenge, selectedChallenge, requestedReward } from '../src/reducers/student-reducer';
import * as CONST from '../src/constants/constants';


describe('student login reducer', () => {
  it('should return the initial state', () => {
    expect(loginInfo(undefined, {})).toEqual({ status: false });
  });

  it('should return a new state with the logged in user', () => {
    const prevState = { status: false };
    const nextState = loginInfo(prevState, { type: CONST.STUDENT_LOGIN_FULFILLED, id: 2, email: 'sanjeet.uppal92@gmail.com' });
    expect(nextState).toEqual({ status: true });
  });

  it('should return a new state with the signed in user', () => {
    const prevState = { status: false };
    const nextState = loginInfo(prevState, { type: CONST.STUDENT_SIGNUP_FULFILLED, name: 'Sanjeet Uppal', email: 'uppal101@mail.chapman.edu', cohort_id: 1, username: 'uppal101' });
    expect(nextState).toEqual({ status: true });
  });

  it('should return a new state with a logged out user', () => {
    const prevState = { status: true };
    const nextState = loginInfo(prevState, { type: CONST.STUDENT_LOGOUT_FULFILLED, id: 2, email: 'sanjeet.uppal92@gmail.com' });
    expect(nextState).toEqual({ status: false });
  });
});

describe('student points and campus reducer', () => {
  it('should return the initial state', () => {
    expect(studentPointsAndCampus(undefined, {})).toEqual({});
  });
});

describe('selected reward reducer', () => {
  it('should return the initial state', () => {
    expect(selectedReward(undefined, {})).toEqual({});
  });
});

describe('submissions reducer', () => {
  it('should return the initial state', () => {
    expect(submissions(undefined, {})).toEqual({ submissions: [] });
  });
});

describe('challenges reducer', () => {
  it('should return the initial state', () => {
    expect(challenges(undefined, {})).toEqual({ challenges: [] });
  });
});

describe('rewards reducer', () => {
  it('should return the initial state', () => {
    expect(rewards(undefined, {})).toEqual({ rewards: [] });
  });
});

describe('requests reducer', () => {
  it('should return the initial state', () => {
    expect(requests(undefined, {})).toEqual({ requests: [] });
  });
});

describe('submitted challenge reducer', () => {
  it('should return the initial state', () => {
    expect(submittedChallenge(undefined, {})).toEqual({ fulfilled: false });
  });
  it('should return a new state with the submitted challenge', () => {
    const prevState = { fulfilled: false };
    const nextState = submittedChallenge(prevState, { type: CONST.CHALLENGE_SUBMISSION_FULFILLED, student_id: 2, challenge_id: 11, cohort_id: 1, description: 'Introduced Ryan to QA Automation in government division for air quality', category_id: 3 });
    expect(nextState).toEqual({ fulfilled: true });
  });
});

describe('selected challenge reducer', () => {
  it('should return the initial state', () => {
    expect(selectedChallenge(undefined, {})).toEqual({});
  });
  it('should return a new state with the submitted challenge', () => {
    const prevState = { fulfilled: false };
    const nextState = submittedChallenge(prevState, { type: CONST.CHALLENGE_SUBMISSION_FULFILLED, student_id: 2, challenge_id: 11, cohort_id: 1, description: 'Introduced Ryan to QA Automation in government division for air quality', category_id: 3 });
    expect(nextState).toEqual({ fulfilled: true });
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
