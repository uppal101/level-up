import { addedChallenge } from '../src/reducers/add-challenge-reducer';

describe('add challenge reducer', () => {
  it('should return the initial state', () => {
    expect(addedChallenge(undefined, {})).toEqual({ fulfilled: false });
  });
});
