import { editedReward } from '../src/reducers/edit-reward-reducer';

describe('edit reward reducer', () => {
  it('should return the initial state', () => {
    expect(editedReward(undefined, {})).toEqual({ fulfilled: false });
  });
});
