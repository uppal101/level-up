import * as actions from '../src/actions/student-rewards-actions';
import * as types from '../src/constants/constants';

describe('student rewards actions', () => {
  it('should create an action reset request', () => {
    const expectedAction = {
      type: types.RESET_REQUEST,
    };
    expect(actions.resetRequest()).toEqual(expectedAction);
  });

  it('should create an action select reward', () => {
    const reward = { test: 1 };
    const expectedAction = {
      type: types.SELECTED_REWARD,
      reward,
    };
    expect(actions.selectReward(reward)).toEqual(expectedAction);
  });
});
