import * as actions from '../src/actions/edit-reward';
import * as types from '../src/constants/constants';

describe('edit reward actions', () => {
  it('should create an action reset edit reward', () => {
    const expectedAction = {
      type: types.RESET_EDIT_REWARD,
    };
    expect(actions.resetEditReward()).toEqual(expectedAction);
  });
});
