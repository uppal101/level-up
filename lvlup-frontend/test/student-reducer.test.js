import { loginInfo } from '../src/reducers/student-reducer';
import { studentPointsAndCampus } from '../src/reducers/student-reducer';
import { selectedReward } from '../src/reducers/student-reducer';
import { submissions } from '../src/reducers/student-reducer';
import { challenges } from '../src/reducers/student-reducer';

describe('student login reducer', () => {
  it('should return the initial state', () => {
    expect(loginInfo(undefined, {})).toEqual({ status: false });
  });
});

describe('student points and campus reducer', () => {
  it('should return the initial state', () => {
    expect(studentPointsAndCampus(undefined, {})).toEqual({});
  });
});

describe('selected reward reducer', () => {
  it('should return the initial state', () => {
    expect(selectedReward(undefined, {})).toEqual({});
  });
});

describe('submissions reducer', () => {
  it('should return the initial state', () => {
    expect(submissions(undefined, {})).toEqual({ submissions: [] });
  });
});

describe('challenges reducer', () => {
  it('should return the initial state', () => {
    expect(challenges(undefined, {})).toEqual({ challenges: [] });
  });
});
