import * as actions from '../../src/actions/reset-actions';
import * as types from '../../src/constants/constants';

describe('reset actions', () => {
  it('should create an action reset pending submission', () => {
    const expectedAction = {
      type: types.RESET_PENDING_SUBMISSIONS,
    };
    expect(actions.resetPendingSubmissions()).toEqual(expectedAction);
  });

  it('should create an action reset pending requests', () => {
    const expectedAction = {
      type: types.RESET_PENDING_REWARDS,
    };
    expect(actions.resetPendingRequests()).toEqual(expectedAction);
  });

  it('should create an action reset rewards list', () => {
    const expectedAction = {
      type: types.RESET_REWARDS_ADMIN,
    };
    expect(actions.resetRewardsList()).toEqual(expectedAction);
  });

  it('should create an action reset challenges list', () => {
    const expectedAction = {
      type: types.RESET_CHALLENGE_ADMIN,
    };
    expect(actions.resetChallengeList()).toEqual(expectedAction);
  });
});
