import { approveSelectedReward, denySelectedReward, inactiveReward } from '../src/reducers/request-reducer';
import * as CONST from '../src/constants/constants';

describe('approve selected reward reducer', () => {
  it('should return the initial state', () => {
    expect(approveSelectedReward(undefined, {})).toEqual({});
  });

  it('should return a new state with the approved selected reward', () => {
    const prevState = {};
    const nextState = approveSelectedReward(prevState, { type: CONST.APPROVE_REWARD_FULFILLED, test: 1 });
    expect(nextState).toEqual({ status: 'Approved' });
  });
});

describe('deny selected reward reducer', () => {
  it('should return the initial state', () => {
    expect(denySelectedReward(undefined, {})).toEqual({});
  });

  it('should return a new state with the selected reward', () => {
    const prevState = {};
    const nextState = denySelectedReward(prevState, { type: CONST.DENY_REWARD_FULFILLED, test: 2 });
    expect(nextState).toEqual({ status: 'Denied' });
  });
});

describe('inactive reward reducer', () => {
  it('should return the initial state', () => {
    expect(inactiveReward(undefined, {})).toEqual({});
  });

  it('should return a new state with the selected reward', () => {
    const prevState = {};
    const nextState = inactiveReward(prevState, { type: CONST.INACTIVE_REWARD_FULFILLED, test: 3 });
    expect(nextState).toEqual({ active: false });
  });
});
