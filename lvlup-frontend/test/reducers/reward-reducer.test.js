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

  it('should return old state when sent incorrect input for approve reward', () => {
    const prevState = { status: 'Pending' };
    const nextState = approveSelectedReward(prevState, { type: CONST.APPROVE_REWARD_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ status: 'Pending', error: 'Server Error - Please Try Again' });
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

  it('should return old state when sent incorrect input for deny reward', () => {
    const prevState = { status: 'Pending' };
    const nextState = denySelectedReward(prevState, { type: CONST.DENY_REWARD_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ status: 'Pending',  error: 'Server Error - Please Try Again'  });
  });
});

describe('inactive reward reducer', () => {
  it('should return the initial state', () => {
    expect(inactiveReward(undefined, {})).toEqual({});
  });

  it('should return a new state with the inactive reward', () => {
    const prevState = { active: true };
    const nextState = inactiveReward(prevState, { type: CONST.INACTIVE_REWARD_FULFILLED, name: 'gSwag', point_cost: 50, description: 'Galvanize apparel', campus_id: 1, category_id: 4 });
    expect(nextState).toEqual({ active: false });
  });

  it('should return old state when sent incorrect input for inactive reward', () => {
    const prevState = { active: false};
    const nextState = inactiveReward(prevState, { type: CONST.INACTIVE_REWARD_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ active: false,  error: 'Server Error - Please Try Again'  });
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
    const prevState = { rewards: [], fetched: false };
    const nextState = rewards(prevState, { type: CONST.REWARDS_CAMPUS_FULFILLED, payload: [{ test: 8 }] });
    expect(nextState).toEqual({ fetched: true, rewards: [{ test: 8 }] });
  });

  it('should return a new state with reset reward', () => {
    const prevState = { fetched: true, rewards: [{ test: 8 }] };
    const nextState = rewards(prevState, { type: CONST.RESET_REWARDS_ADMIN, payload: [{ test: 8 }] });
    expect(nextState).toEqual({ rewards: [] });
  });

  it('should return old state when sent incorrect input for rewards', () => {
    const prevState = { rewards: [] };
    const nextState = rewards(prevState, { type: CONST.REWARDS_CAMPUS_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ rewards: [],  error: 'Server Error - Please Try Again'  });
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

  it('should return old state when sent incorrect input for requests', () => {
    const prevState = { requests: []};
    const nextState = requests(prevState, { type: CONST.REQUESTS_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ requests: [], error: 'Server Error - Please Try Again'  });
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

  it('should return a new state with the reset requested reward', () => {
    const prevState = { fulfilled: true };
    const nextState = requestedReward(prevState, { type: CONST.RESET_REQUEST });
    expect(nextState).toEqual({ fulfilled: false });
  });

  it('should return old state when sent incorrect input for requested reward', () => {
    const prevState = { fulfilled: false };
    const nextState = requestedReward(prevState, { type: CONST.REWARD_REQUEST_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ fulfilled: false,  error: 'Server Error - Please Try Again'  });
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

  it('should return a new state with reset added reward', () => {
    const prevState = { fulfilled: true };
    const nextState = addedReward(prevState, { type: CONST.RESET_ADD_REWARD });
    expect(nextState).toEqual({ fulfilled: false });
  });

  it('should return old state when sent incorrect input for add reward', () => {
    const prevState = { fulfilled: false };
    const nextState = addedReward(prevState, { type: CONST.ADD_REWARD_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ fulfilled: false, error: 'Server Error - Please Try Again' });
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

  it('should return a new state with the reset edited reward', () => {
    const prevState = { fulfilled: true };
    const nextState = editedReward(prevState, { type: CONST.RESET_EDIT_REWARD });
    expect(nextState).toEqual({ fulfilled: false });
  });

  it('should return old state when sent incorrect input for edit reward', () => {
    const prevState = { fulfilled: false };
    const nextState = editedReward(prevState, { type: CONST.EDIT_REWARD_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ fulfilled: false,  error: 'Server Error - Please Try Again'  });
  });
});
