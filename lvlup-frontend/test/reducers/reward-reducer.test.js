import { approveSelectedReward, denySelectedReward, inactiveReward, addedReward, editedReward, requestedReward, requests, rewards, selectedReward } from '../../src/reducers/reward-reducers';
import * as CONST from '../../src/constants/constants';

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

describe('selected reward reducer', () => {
  it('should return the initial state', () => {
    expect(selectedReward(undefined, {})).toEqual({});
  });

  it('should return a new state with the selected reward', () => {
    const prevState = {};
    const nextState = selectedReward(prevState, { type: CONST.SELECTED_REWARD, reward: { test: 2 } });
    expect(nextState).toEqual({ test: 2 });
  });
});


describe('rewards reducer', () => {
  it('should return the initial state', () => {
    expect(rewards(undefined, {})).toEqual({ rewards: [], fetched: false });
  });

  it('should return a new state with the reward', () => {
    const prevState = { rewards: [] };
    const nextState = rewards(prevState, { type: CONST.REWARDS_CAMPUS_FULFILLED, payload: [{ test: 8 }] });

    expect(nextState).toEqual({ fetched: true, rewards: [{ test: 8 }] });
  });
});

describe('requests reducer', () => {
  it('should return the initial state', () => {
    expect(requests(undefined, {})).toEqual({ requests: [] });
  });

  it('should return a new state with the request', () => {
    const prevState = { requests: [] };
    const nextState = requests(prevState, { type: CONST.REQUESTS_FULFILLED, payload: [{ test: 4 }] });
    expect(nextState).toEqual({ requests: [{ test: 4 }] });
  });
});


describe('requested reward reducer', () => {
  it('should return the initial state', () => {
    expect(requestedReward(undefined, {})).toEqual({ fulfilled: false });
  });

  it('should return a new state with the requested reward', () => {
    const prevState = { fulfilled: false };
    const nextState = requestedReward(prevState, { type: CONST.REWARD_REQUEST_FULFILLED, student_id: 2, reward_id: 11, cohort_id: 1, notes: 'envelope please', category_id: 4 });
    expect(nextState).toEqual({ fulfilled: true });
  });
});

describe('add reward reducer', () => {
  it('should return the initial state when no action is passed in', () => {
    expect(addedReward(undefined, {})).toEqual({ fulfilled: false });
  });

  it('should return a new state with the added reward', () => {
    const prevState = { fulfilled: false };
    const nextState = addedReward(prevState, { type: CONST.ADD_REWARD_FULFILLED, name: 'gSwag', point_cost: 50, description: 'Galvanize apparel', campus_id: 1, category_id: 4 });
    expect(nextState).toEqual({ fulfilled: true });
  });
});

describe('edit reward reducer', () => {
  it('should return the initial state', () => {
    expect(editedReward(undefined, {})).toEqual({ fulfilled: false });
  });
  it('should return a new state with the edited reward', () => {
    const prevState = { fulfilled: false };
    const nextState = editedReward(prevState, { type: CONST.EDIT_REWARD_FULFILLED, name: 'gSwag', point_cost: 50, description: 'Galvanize hat', campus_id: 1, category_id: 4 });
    expect(nextState).toEqual({ fulfilled: true });
  });
});
