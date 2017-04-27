const express = require('express');
const Student = require('../models/student');
const ChallengeSubmissionsPts = require('../collections/challenge_submissions_pts');
const Challenge = require('../models/challenge');
const Reward = require('../models/reward');
const RewardRequests = require('../collections/reward_requests');
const knex = require('../knex.js');
const Bluebird = require('bluebird');

const router = express.Router();

let ptsEarned;
let ptsUsed;
let q1;
let q2;
let q3;
let q4;
let grad;
let q1Earned;
let q2Earned;
let q3Earned;
let q4Earned;

const getPtsEarned = (studentId) => {
  knex('challenge_submissions')
  .where({
    student_id: studentId,
    submission_status: 'Approved',
  })
  .select(['challenge_submissions.updated_at', 'challenges.point_value'])
  .innerJoin('challenges', 'challenges.id', 'challenge_submissions.challenge_id')
  .then((submissions) => {
    ptsEarned = submissions;
    console.log(ptsEarned);
    return submissions;
  })
  .catch(err => console.error(err));
};

const getPtsUsed = (studentId) => {
  knex('reward_requests')
  .where({
    student_id: studentId,
    status: 'Approved',
  })
  .select(['reward_requests.updated_at', 'rewards.point_cost'])
  .innerJoin('rewards', 'rewards.id', 'reward_requests.reward_id')
  .then((requests) => {
    ptsUsed = requests;
    console.log(ptsUsed);
    return requests;
  })
  .catch(err => console.error(err));
};

const getCohortSchedule = (studentId) => {
  knex('students')
  .where('students.id', studentId)
  .select(['q1_start_date', 'q2_start_date', 'q3_start_date', 'q4_start_date', 'graduation_date'])
  .innerJoin('cohorts', 'cohorts.id', 'students.cohort_id')
  .then((dates) => {
    console.log(dates[0].q1_start_date);
    q1 = dates[0].q1_start_date;
    q2 = dates[0].q2_start_date;
    q3 = dates[0].q3_start_date;
    q4 = dates[0].q4_start_date;
    grad = dates[0].graduation_date;
    console.log(q1, q2, q3, q4, grad);
    return dates;
  })
  .catch(err => console.error(err));
};

router.get('/points/students/:student_id', (req, res) => {
  getPtsEarned(req.params.student_id)
  .then(getPtsUsed(req.params.student_id))
  .then(getCohortSchedule(req.params.student_id))
  .then(() => {
    console.log('q4 is here:', q4);
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
