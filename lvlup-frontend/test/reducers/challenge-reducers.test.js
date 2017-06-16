import { addedChallenge, challenges, editedChallenge, inactiveChallenge, selectedChallenge, submissions, submittedChallenge } from '../../src/reducers/challenge-reducers';
import * as CONST from '../../src/constants/constants';

describe('add challenge reducer', () => {
  it('should return the initial state if incorrect value or nothing is passed in', () => {
    expect(addedChallenge(undefined, {})).toEqual({ fulfilled: false });
  });

  it('should return a new state with the added challenge', () => {
    const prevState = { fulfilled: false };
    const nextState = addedChallenge(prevState, { type: CONST.ADD_CHALLENGE_FULFILLED, name: 'Participate in pushup hour', point_value: 1, description: 'Commit to a healthy lifestyle', campus_id: 1, category_id: 4, requirement_1: ' Must do some form of exercise for at least 2 minutes' });
    expect(nextState).toEqual({ fulfilled: true });
  });
});

describe('edit challenge reducer', () => {
  it('should return the initial state', () => {
    expect(editedChallenge(undefined, {})).toEqual({ fulfilled: false });
  });

  it('should return a new state with the edited challenge', () => {
    const prevState = { fulfilled: false };
    const nextState = editedChallenge(prevState, { type: CONST.EDIT_CHALLENGE_FULFILLED, name: 'Host a meditation session', point_value: 5, description: 'Commit to a healthy lifestyle', campus_id: 1, category_id: 4, requirement_1: ' Must be at least 10 minutes long' });
    expect(nextState).toEqual({ fulfilled: true });
  });
});

describe('inactive challenge reducer', () => {
  it('should return the initial state', () => {
    expect(inactiveChallenge(undefined, {})).toEqual({ });
  });

  it('should return a new state with the edited challenge', () => {
    const prevState = {};
    const nextState = inactiveChallenge(prevState, { type: CONST.INACTIVE_CHALLENGE_FULFILLED, name: 'Host a meditation session', point_value: 5, description: 'Commit to a healthy lifestyle', campus_id: 1, category_id: 4, requirement_1: ' Must be at least 10 minutes long' });
    expect(nextState).toEqual({ active: 'Inactive' });
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
