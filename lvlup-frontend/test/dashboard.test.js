import * as helpers from '../src/components/Student/helpers/dashboard';

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
  it('should return points earned in the quarter one', () => {
    const pointsObj = {
      currentQuarter: 'q1',
      q1Earned: 125,
      totalEarned: 125,
    };
    expect(helpers.quarterPointFinder(pointsObj)).toEqual(pointsObj.q1Earned);
  });

  it('should return points earned in the quarter two', () => {
    const pointsObj = {
      currentQuarter: 'q2',
      q1Earned: 125,
      q2Earned: 100,
      totalEarned: 225,
    };
    expect(helpers.quarterPointFinder(pointsObj)).toEqual(pointsObj.q2Earned);
  });

  it('should return points earned in the quarter three', () => {
    const pointsObj = {
      currentQuarter: 'q3',
      q1Earned: 125,
      q2Earned: 100,
      q3Earned: 100,
      totalEarned: 325,
    };
    expect(helpers.quarterPointFinder(pointsObj)).toEqual(pointsObj.q3Earned);
  });

  it('should return points earned in the quarter four', () => {
    const pointsObj = {
      currentQuarter: 'q4',
      q1Earned: 125,
      q2Earned: 100,
      q3Earned: 100,
      q4Earned: 100,
      totalEarned: 425,
    };
    expect(helpers.quarterPointFinder(pointsObj)).toEqual(pointsObj.q4Earned);
  });

  it('should return total points earned when graduated', () => {
    const pointsObj = {
      currentQuarter: 'grad',
      q1Earned: 125,
      q2Earned: 100,
      q3Earned: 100,
      q4Earned: 100,
      totalEarned: 425,
    };
    expect(helpers.quarterPointFinder(pointsObj)).toEqual(pointsObj.totalEarned);
  });
});

describe('get first name', () => {
  it('should return first letter', () => {
    expect(helpers.getFirstName('first name')).toEqual('first');
  });
});
