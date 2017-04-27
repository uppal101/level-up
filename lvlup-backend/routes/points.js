const express = require('express');
const Student = require('../models/student');
const ChallengeSubmissionsPts = require('../collections/challenge_submissions_pts');
const Challenge = require('../models/challenge');
const Reward = require('../models/reward');
const RewardRequests = require('../collections/reward_requests');
const points = require('../helpers/points');

const router = express.Router();

router.get('/points/students/:student_id', (req, res) => {
  points.getPtsEarned(req.params.student_id)
  .then(() => points.getPtsUsed(req.params.student_id))
  .then(() => points.getCohortSchedule(req.params.student_id))
  .then(() => {
    points.distributePts();
    res.status(200).json(points.calculatePts());
  })
  .catch(err => res.status(500).json(err.message));
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
