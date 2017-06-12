import { approveSelectedReward, denySelectedReward, inactiveReward } from '../src/reducers/request-reducer';


describe('approve request reducer', () => {
  it('should return the initial state', () => {
    expect(approveSelectedReward(undefined, {})).toEqual({});
  });
});
describe('deny request reducer', () => {
  it('should return the initial state', () => {
    expect(denySelectedReward(undefined, {})).toEqual({});
  });
});
