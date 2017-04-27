const express = require('express');
const Student = require('../models/student');
const ChallengeSubmissionsPts = require('../collections/challenge_submissions_pts');
const Challenge = require('../models/challenge');
const Reward = require('../models/reward');
const RewardRequests = require('../collections/reward_requests');
const knex = require('../knex.js');
const Bluebird = require('bluebird');
const moment = require('moment');

const router = express.Router();

let ptsEarned;
let ptsUsed;
let q1;
let q2;
let q3;
let q4;
let grad;
const q1Earned = [];
const q2Earned = [];
const q3Earned = [];
const q4Earned = [];
const totalEarned = [];
const q1Used = [];
const q2Used = [];
const q3Used = [];
const q4Used = [];
const totalUsed = [];

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
      // console.log(ptsEarned);
      resolve('submissions worked');
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
      // console.log(ptsUsed);
      resolve(console.log('requests worked'));
    })
    .catch(err => console.error(err));
});

const getCohortSchedule = studentId => new Promise((resolve) => {
  knex('students')
    .where('students.id', studentId)
    .select(['q1_start_date', 'q2_start_date', 'q3_start_date', 'q4_start_date', 'graduation_date'])
    .innerJoin('cohorts', 'cohorts.id', 'students.cohort_id')
    .then((dates) => {
      q1 = dates[0].q1_start_date;
      q2 = dates[0].q2_start_date;
      q3 = dates[0].q3_start_date;
      q4 = dates[0].q4_start_date;
      grad = dates[0].graduation_date;
      // console.log(q1, q2, q3, q4, grad);
      resolve(dates);
    })
    .catch(err => console.error(err));
});

const determineQuarter = (time) => {
  if ((moment(time).isAfter(q1)) && (moment(time).isBefore(q2))) {
    console.log('q1:', time);
    return 'q1';
  } else if ((moment(time).isAfter(q2)) && (moment(time).isBefore(q3))) {
    console.log('q2:', time);
    return 'q2';
  } else if ((moment(time).isAfter(q3)) && (moment(time).isBefore(q4))) {
    console.log('q3:', time);
    return 'q3';
  } else if ((moment(time).isAfter(q4)) && (moment(time).isBefore(grad))) {
    console.log('q4:', time);
    return 'q4';
  }
  return 'This time is not within the program start and end dates';
};

const distributePts = () => {
  ptsEarned.forEach((submission) => {
    console.log('Submission:', submission.updated_at);
    console.log(determineQuarter(submission.updated_at));
    switch (determineQuarter(submission.updated_at)) {
      case 'q1':
        totalEarned.push(submission.point_value);
        q1Earned.push(submission.point_value);
        break;
      case 'q2':
        totalEarned.push(submission.point_value);
        q2Earned.push(submission.point_value);
        break;
      case 'q3':
        totalEarned.push(submission.point_value);
        q3Earned.push(submission.point_value);
        break;
        console.log('Case q3');
      case 'q4':
        totalEarned.push(submission.point_value);
        q4Earned.push(submission.point_value);
        break;
      default:
        console.log('This time is not within the program start and end dates');
    }
  });
  console.log('q1 earned:', q1Earned);
  console.log('q2 earned:', q2Earned);
  console.log('q3 earned:', q3Earned);
  console.log('q4 earned:', q4Earned);
  console.log('total earned:', totalEarned);
  ptsUsed.forEach((request) => {
    console.log('request:', request.updated_at);
    console.log(determineQuarter(request.updated_at));
    switch (determineQuarter(request.updated_at)) {
      case 'q1':
        totalUsed.push(request.point_cost);
        q1Used.push(request.point_cost);
        break;
      case 'q2':
        totalUsed.push(request.point_cost);
        q2Used.push(request.point_cost);
        break;
      case 'q3':
        totalUsed.push(request.point_cost);
        q3Used.push(request.point_cost);
        break;
        console.log('Case q3');
      case 'q4':
        totalUsed.push(request.point_cost);
        q4Used.push(request.point_cost);
        break;
      default:
        console.log('This time is not within the program start and end dates');
    }
  });
  console.log('q1 Used:', q1Used);
  console.log('q2 Used:', q2Used);
  console.log('q3 Used:', q3Used);
  console.log('q4 Used:', q4Used);
  console.log('total Used:', totalUsed);
};

router.get('/points/students/:student_id', (req, res) => {
  getPtsEarned(req.params.student_id)
  .then(() => getPtsUsed(req.params.student_id))
  .then(() => getCohortSchedule(req.params.student_id))
  .then(() => {
    console.log('q4 is here:', q4);
    distributePts();
  });
});

// Student.forge({ id: req.params.student_id })
// .fetch({
//   columns: ['id'],
//   withRelated: ['challengeSubmissionsPts', { 'challengeSubmissionsPts.challenge': function (qb) {
//     qb.column('id', 'point_value');
//   } }],
// })
// router.get('/students/:id', (req, res) => {
//   Student.forge({ id: req.params.id })
//   .fetch({
//     columns: ['email', 'first_name', 'id'],
//     withRelated: [ 'challengeSubmissions'
//       // {'challengeSubmissions': function(qb) { qb.column('id', 'challenge_id'); } }
//      , { 'challengeSubmissions.challenge': function (qb) {
//        console.log(qb);
//        qb.column('id', 'point_value', 'description'); } }
//    ],
//   })
//   .then((student) => {
//     res.status(200).json(student);
//   })
//   .catch(err => console.error(err));
// });

module.exports = router;
