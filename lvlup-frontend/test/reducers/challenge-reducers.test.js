import { addedChallenge, challenges, editedChallenge, inactiveChallenge, selectedChallenge, submissions, submittedChallenge } from '../../src/reducers/challenge-reducers';
import * as CONST from '../../src/constants/constants';

describe('add challenge reducer', () => {
  it('should return the initial state if incorrect value or nothing is passed in', () => {
    expect(addedChallenge(undefined, {})).toEqual({ fulfilled: false });
  });

  it('should return a new state with the added challenge', () => {
    const prevState = { fulfilled: false };
    const nextState = addedChallenge(prevState, { type: CONST.ADD_CHALLENGE_FULFILLED, test: 2 });
    expect(nextState).toEqual({ fulfilled: true });
  });

  it('should return a new state with reset added challenge', () => {
    const prevState = { fulfilled: true };
    const nextState = addedChallenge(prevState, { type: CONST.RESET_ADD_CHALLENGE });
    expect(nextState).toEqual({ fulfilled: false });
  });

  it('should return old state when sent incorrect input for add challenge', () => {
    const prevState = { fulfilled: false};
    const nextState = addedChallenge(prevState, { type: CONST.ADD_CHALLENGE_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ fulfilled: false, error: 'Server Error - Please Try Again'  });
  });
});

describe('edit challenge reducer', () => {
  it('should return the initial state', () => {
    expect(editedChallenge(undefined, {})).toEqual({ fulfilled: false });
  });

  it('should return a new state with the edited challenge', () => {
    const prevState = { fulfilled: false };
    const nextState = editedChallenge(prevState, { type: CONST.EDIT_CHALLENGE_FULFILLED, test: 1 });
    expect(nextState).toEqual({ fulfilled: true });
  });

  it('should return a new state with the  reset edit challenge', () => {
    const prevState = { fulfilled: true };
    const nextState = editedChallenge(prevState, { type: CONST.RESET_EDIT_CHALLENGE });
    expect(nextState).toEqual({ fulfilled: false });
  });

  it('should return old state when sent incorrect input for edit challenge', () => {
    const prevState = { fulfilled: false };
    const nextState = editedChallenge(prevState, { type: CONST.EDIT_CHALLENGE_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ fulfilled: false, error: 'Server Error - Please Try Again'  });
  });
});

describe('inactive challenge reducer', () => {
  it('should return the initial state', () => {
    expect(inactiveChallenge(undefined, {})).toEqual({ });
  });

  it('should return a new state with the edited challenge', () => {
    const prevState = {};
    const nextState = inactiveChallenge(prevState, { type: CONST.INACTIVE_CHALLENGE_FULFILLED, test: 3 });
    expect(nextState).toEqual({ active: 'Inactive' });
  });

  it('should return old state when sent incorrect input for inacitve challenge', () => {
    const prevState = { active: 'Inactive'};
    const nextState = inactiveChallenge(prevState, { type: CONST.INACTIVE_CHALLENGE_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ active: 'Inactive', error: 'Server Error - Please Try Again'  });
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

  it('should return old state when sent incorrect input for submissions', () => {
    const prevState = { submissions: []};
    const nextState = submissions(prevState, { type: CONST.SUBMISSIONS_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ submissions: [], error: 'Server Error - Please Try Again'  });
  });
});

describe('challenges reducer', () => {
  it('should return the initial state', () => {
    expect(challenges(undefined, {})).toEqual({ challenges: [], fetched: false });
  });

  it('should return a new state with the challenge', () => {
    const prevState = { challenges: [] };
    const nextState = challenges(prevState, { type: CONST.CHALLENGES_CAMPUS_FULFILLED, payload: [{ test: 9 }] });
    expect(nextState).toEqual({ challenges: [{ test: 9 }], fetched: true });
  });

  it('should return a new state with the reset challenge', () => {
    const prevState = { challenges: [{ test: 9 }] };
    const nextState = challenges(prevState, { type: CONST.RESET_CHALLENGE_ADMIN, challenges: [] });
    expect(nextState).toEqual({ challenges: [] });
  });

  it('should return a new state with the reset after added challenge', () => {
    const prevState = { challenges: [{ test: 9 }] };
    const nextState = challenges(prevState, { type: CONST.RESET_AFTER_ADDED_CHALLENGE_FULFILLED, payload: [] });
    expect(nextState).toEqual({ challenges: [] });
  });

  it('should return old state when sent incorrect input for challenge', () => {
    const prevState = { challenges: [] };
    const nextState = challenges(prevState, { type: CONST.CHALLENGES_CAMPUS_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ challenges: [], error: 'Server Error - Please Try Again'  });
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

  it('should return a new state with the reset submitted challenge', () => {
    const prevState = { fulfilled: true };
    const nextState = submittedChallenge(prevState, { type: CONST.RESET_CHALLENGE });
    expect(nextState).toEqual({ fulfilled: false });
  });

  it('should return old state when sent incorrect input for submitted reward', () => {
    const prevState = { fulfilled: false };
    const nextState = submittedChallenge(prevState, { type: CONST.CHALLENGE_SUBMISSION_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ fulfilled: false, error: 'Server Error - Please Try Again' });
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

  it('should return old state when sent incorrect input for selected challenge', () => {
    const prevState = {};
    const nextState = selectedChallenge(prevState, { type: CONST.ADMIN_SUBMISSION_FORM_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ error: 'Server Error - Please Try Again'  });
  });
});
