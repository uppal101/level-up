import moment from 'moment';

export const quarterConverter = (quarter) => {
  switch (quarter) {
    case 'q1':
      return 'Quarter 1';
    case 'q2':
      return 'Quarter 2';
    case 'q3':
      return 'Quarter 3';
    case 'q4':
      return 'Quarter 4';
    case 'grad':
      return 'Graduated';
    default:
      return quarter;
  }
};

export const quarterPointFinder = (pointsObj) => {
  switch (pointsObj.currentQuarter) {
    case 'q1':
      return pointsObj.q1Earned;
    case 'q2':
      return pointsObj.q2Earned;
    case 'q3':
      return pointsObj.q3Earned;
    case 'q4':
      return pointsObj.q4Earned;
    case 'grad':
      return pointsObj.totalEarned;
    default:
      return pointsObj.totalEarned;
  }
};

export const getFirstName = name => name.split(' ')[0];

export const formatDate = time => moment(time).format('MM/DD/YYYY');
