import { editedChallenge, inactiveChallenge } from '../src/reducers/edit-challenge-reducer';
import * as CONST from '../src/constants/constants';

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
