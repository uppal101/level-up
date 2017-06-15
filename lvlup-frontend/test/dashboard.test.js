import * as helpers from '../src/helpers/dashboard';

describe('quarter converter', () => {
  it('should return quarter', () => {
    expect(helpers.quarterConverter('q1')).toEqual('Quarter 1');
  });
  it('should return quarter', () => {
    expect(helpers.quarterConverter('q2')).toEqual('Quarter 2');
  });
  it('should return quarter', () => {
    expect(helpers.quarterConverter('q3')).toEqual('Quarter 3');
  });
  it('should return quarter', () => {
    expect(helpers.quarterConverter('q4')).toEqual('Quarter 4');
  });
  it('should return graduated', () => {
    expect(helpers.quarterConverter('grad')).toEqual('Graduated');
  });
});

describe('quarter point finder', () => {
  it('should return points earned in the quarter', () => {
    const pointsObj = {
      q1Earned: 125,
      q2Earned: 100,
      q3Earned: 100,
      q4Earned: 100,
      totalEarned: 425,
    };
    expect(helpers.quarterPointFinder('q1')).toEqual(pointsObj.q1Earned);
  });

  it('should return points earned in the quarter', () => {
    const pointsObj = {
      q1Earned: 125,
      q2Earned: 100,
      q3Earned: 100,
      q4Earned: 100,
      totalEarned: 425,
    };
    expect(helpers.quarterPointFinder('q2')).toEqual(pointsObj.q2Earned);
  });
});
