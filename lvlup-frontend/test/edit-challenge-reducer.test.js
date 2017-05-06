import { editedChallenge } from '../src/reducers/edit-challenge-reducer';

describe('edit challenge reducer', () => {
  it('should return the initial state', () => {
    expect(editedChallenge(undefined, {})).toEqual({ fulfilled: false });
  });
});
