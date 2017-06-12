import { loginInfo, studentPointsAndCampus, selectedReward, submissions, challenges, rewards, requests, submittedChallenge, selectedChallenge, requestedReward } from '../src/reducers/student-reducer';


describe('student login reducer', () => {
  it('should return the initial state', () => {
    expect(loginInfo(undefined, {})).toEqual({ status: false });
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
});

describe('selected challenge reducer', () => {
  it('should return the initial state', () => {
    expect(selectedChallenge(undefined, {})).toEqual({});
  });
});

describe('requested reward reducer', () => {
  it('should return the initial state', () => {
    expect(requestedReward(undefined, {})).toEqual({ fulfilled: false });
  });
});
