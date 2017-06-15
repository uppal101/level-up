import * as actions from '../src/actions/edit-challenge';
import * as types from '../src/constants/constants';

describe('edit challenge actions', () => {
  it('should create an action reset edit challenge', () => {
    const expectedAction = {
      type: types.RESET_EDIT_CHALLENGE,
    };
    expect(actions.resetEditChallenge()).toEqual(expectedAction);
  });
});
