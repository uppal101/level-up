import { signedUp } from '../src/reducers/admin-signup-reducer';
import { allCampuses } from '../src/reducers/admin-signup-reducer';
import { allCohorts } from '../src/reducers/admin-signup-reducer';
import { setCampus } from '../src/reducers/admin-signup-reducer';
import { setCohort } from '../src/reducers/admin-signup-reducer';

describe('admin signedUp reducer', () => {
  it('should return the initial state', () => {
    expect(signedUp(undefined, {})).toEqual({ status: false });
  });
});

describe('admin allCampuses reducer', () => {
  it('should return the initial state', () => {
    expect(allCampuses(undefined, {})).toEqual([]);
  });
});

describe('admin allCohorts reducer', () => {
  it('should return the initial state', () => {
    expect(allCohorts(undefined, {})).toEqual([]);
  });
});

describe('admin setCampus reducer', () => {
  it('should return the initial state', () => {
    expect(setCampus(undefined, {})).toEqual('');
  });
});

describe('admin setCohort reducer', () => {
  it('should return the initial state', () => {
    expect(setCohort(undefined, {})).toEqual('');
  });
});
