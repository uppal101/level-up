const knex = require('../knex.js');
const moment = require('moment');

let location;
let cohortName;
let cohortType;
let ptsEarned;
let ptsUsed;
let q1;
let q2;
let q3;
let q4;
let grad;
let campusId;
let q1Earned;
let q2Earned;
let q3Earned;
let q4Earned;
let totalEarned;
let q1Used;
let q2Used;
let q3Used;
let q4Used;
let totalUsed;

const getPtsEarned = studentId => new Promise((resolve) => {
  knex('challenge_submissions')
  .where({
    student_id: studentId,
    submission_status: 'Approved',
  })
  .select(['challenge_submissions.updated_at', 'challenges.point_value'])
  .innerJoin('challenges', 'challenges.id', 'challenge_submissions.challenge_id')
  .then((submissions) => {
    ptsEarned = submissions;
    resolve(submissions);
  })
  .catch(err => console.error(err));
});

const getPtsUsed = studentId => new Promise((resolve) => {
  knex('reward_requests')
  .where({
    student_id: studentId,
    status: 'Approved',
  })
  .select(['reward_requests.updated_at', 'rewards.point_cost'])
  .innerJoin('rewards', 'rewards.id', 'reward_requests.reward_id')
  .then((requests) => {
    ptsUsed = requests;
    resolve(requests);
  })
  .catch(err => console.error(err));
});

const getStudentInfo = studentId => new Promise((resolve) => {
  knex('students')
  .where('students.id', studentId)
  .select(['q1_start_date', 'q2_start_date', 'q3_start_date', 'q4_start_date', 'graduation_date', 'cohorts.name', 'cohorts.type', 'campuses.location', 'campuses.id as campus_id'])
  .innerJoin('cohorts', 'cohorts.id', 'students.cohort_id')
  .join('campuses', 'campuses.id', 'cohorts.campus_id')
  .then((dates) => {
    cohortName = dates[0].name;
    cohortType = dates[0].type;
    location = dates[0].location;
    q1 = dates[0].q1_start_date;
    q2 = dates[0].q2_start_date;
    q3 = dates[0].q3_start_date;
    q4 = dates[0].q4_start_date;
    grad = dates[0].graduation_date;
    campusId = dates[0].campus_id;
    resolve(dates);
  })
  .catch(err => console.error(err));
});

const determineQuarter = (time) => {
  if ((moment(time).isAfter(q1)) && (moment(time).isBefore(q2))) {
    return 'q1';
  } else if ((moment(time).isAfter(q2)) && (moment(time).isBefore(q3))) {
    return 'q2';
  } else if ((moment(time).isAfter(q3)) && (moment(time).isBefore(q4))) {
    return 'q3';
  } else if ((moment(time).isAfter(q4)) && (moment(time).isBefore(grad))) {
    return 'q4';
  } else if ((moment(time).isAfter(grad))) {
    return 'grad';
  }
  return 'This time is not within the program start and end dates';
};

const distributePts = () => {
  totalEarned = [0];
  q1Earned = [0];
  q2Earned = [0];
  q3Earned = [0];
  q4Earned = [0];
  totalUsed = [0];
  q1Used = [0];
  q2Used = [0];
  q3Used = [0];
  q4Used = [0];
  ptsEarned.forEach((submission) => {
    totalEarned.push(submission.point_value);
    switch (determineQuarter(submission.updated_at)) {
      case 'q1':
        q1Earned.push(submission.point_value);
        break;
      case 'q2':
        q2Earned.push(submission.point_value);
        break;
      case 'q3':
        q3Earned.push(submission.point_value);
        break;
      case 'q4':
        q4Earned.push(submission.point_value);
        break;
      default:
        console.log('The update date is outside of the program start and end dates');
    }
  });
  ptsUsed.forEach((request) => {
    totalUsed.push(request.point_cost);
    switch (determineQuarter(request.updated_at)) {
      case 'q1':
        q1Used.push(request.point_cost);
        break;
      case 'q2':
        q2Used.push(request.point_cost);
        break;
      case 'q3':
        q3Used.push(request.point_cost);
        break;
      case 'q4':
        q4Used.push(request.point_cost);
        break;
      default:
        console.log('The update date is outside of the program start and end dates');
    }
  });
};

const calculatePts = () => {
  const points = {};
  points.cohort = cohortName;
  points.cohortType = cohortType;
  points.location = location;
  points.campusId = campusId;
  points.currentQuarter = determineQuarter(moment());
  points.totalEarned = totalEarned.reduce((acc, pts) => acc + pts);
  points.totalUsed = totalUsed.reduce((acc, pts) => acc + pts);
  points.q1Earned = q1Earned.reduce((acc, pts) => acc + pts);
  points.q1Used = q1Used.reduce((acc, pts) => acc + pts);
  points.q2Earned = q2Earned.reduce((acc, pts) => acc + pts);
  points.q2Used = q2Used.reduce((acc, pts) => acc + pts);
  points.q3Earned = q3Earned.reduce((acc, pts) => acc + pts);
  points.q3Used = q3Used.reduce((acc, pts) => acc + pts);
  points.q4Earned = q4Earned.reduce((acc, pts) => acc + pts);
  points.q4Used = q4Used.reduce((acc, pts) => acc + pts);
  points.currentTotal = points.totalEarned - points.totalUsed;
  return points;
};

module.exports = {
  getPtsEarned,
  getPtsUsed,
  getStudentInfo,
  determineQuarter,
  distributePts,
  calculatePts,
};
