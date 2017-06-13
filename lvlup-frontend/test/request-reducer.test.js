import { approveSelectedReward, denySelectedReward, inactiveReward } from '../src/reducers/request-reducer';

describe('approve selected reward reducer', () => {
  it('should return the initial state', () => {
    expect(approveSelectedReward(undefined, {})).toEqual({});
  });
});

describe('deny selected reward reducer', () => {
  it('should return the initial state', () => {
    expect(denySelectedReward(undefined, {})).toEqual({});
  });
});

describe('inactive reward reducer', () => {
  it('should return the initial state', () => {
    expect(inactiveReward(undefined, {})).toEqual({});
  });
});
