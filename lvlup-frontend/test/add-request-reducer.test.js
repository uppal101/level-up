import { approveSelectedReward, denySelectedReward, inactiveReward } from '../src/reducers/request-reducer';
import * as CONST from '../src/constants/constants';

describe('approve reward reducer', () => {
  it('should return the initial state', () => {
    expect(approveSelectedReward(undefined, {})).toEqual({});
  });
  it('should return a new state with the added reward', () => {
    const prevState = { status: 'Pending' };
    const nextState = approveSelectedReward(prevState, { type: CONST.APPROVE_REWARD_FULFILLED, name: 'gSwag', point_cost: 50, description: 'Galvanize apparel', campus_id: 1, category_id: 4 });
    expect(nextState).toEqual({ status: 'Approved' });
  });
});


describe('deny reward reducer', () => {
  it('should return the initial state', () => {
    expect(denySelectedReward(undefined, {})).toEqual({});
  });
  it('should return a new state with the denied reward', () => {
    const prevState = { status: 'Pending' };
    const nextState = denySelectedReward(prevState, { type: CONST.DENY_REWARD_FULFILLED, name: 'gSwag', point_cost: 50, description: 'Galvanize apparel', campus_id: 1, category_id: 4 });
    expect(nextState).toEqual({ status: 'Denied' });
  });
});

describe('inactive reward reducer', () => {
  it('should return the initial state', () => {
    expect(inactiveReward(undefined, {})).toEqual({});
  });
  it('should return a new state with the inactive reward', () => {
    const prevState = { status: 'Pending' };
    const nextState = inactiveReward(prevState, { type: CONST.INACTIVE_REWARD_FULFILLED, name: 'gSwag', point_cost: 50, description: 'Galvanize apparel', campus_id: 1, category_id: 4 });
    expect(nextState).toEqual({ active: false });
  });
});
