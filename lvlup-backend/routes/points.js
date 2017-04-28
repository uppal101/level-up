const express = require('express');
const Student = require('../models/student');
const ChallengeSubmissionsPts = require('../collections/challenge_submissions_pts');
const Challenge = require('../models/challenge');
const Reward = require('../models/reward');
const RewardRequests = require('../collections/reward_requests');
const points = require('../helpers/points');

const router = express.Router();

router.get('/points/students/:student_id', (req, res) => {
  console.log('points');
  points.getPtsEarned(req.params.student_id)
  .then(() => points.getPtsUsed(req.params.student_id))
  .then(() => points.getCohortSchedule(req.params.student_id))
  .then(() => {
    points.distributePts();
    res.status(200).json(points.calculatePts());
  })
  .catch(err => res.status(500).json(err.message));
});

module.exports = router;
