import * as actions from '../src/actions/add-reward';
import * as types from '../src/constants/constants';

describe('add reward actions', () => {
  it('should create an action reset add reward', () => {
    const expectedAction = {
      type: types.RESET_ADD_REWARD,
    };
    expect(actions.resetAddReward()).toEqual(expectedAction);
  });
});
