const express = require('express');
const Students = require('../collections/students');
const Student = require('../models/student');
const ChallengeSubmissionsPts = require('../collections/challenge_submissions_pts');
const Challenge = require('../models/challenge');
const Reward = require('../models/reward');
const RewardRequests = require('../collections/reward_requests');
const points = require('../helpers/points');

const router = express.Router();

router.route('/students')
  .get((req, res) => {
    Students.forge()
    .fetch()
    .then(students => res.status(200).json(students))
    .catch(err => res.status(500).json(err.message));
  });

router.route('/students/:id')
  .get((req, res) => {
    Student.forge({ id: req.params.id })
    .fetch()
    .then(student => res.status(200).json(student))
    .catch(err => res.status(500).json(err.message));
  })

  .delete((req, res) => {
    Student.forge({ id: req.params.id })
    .fetch()
    .then(student => student.destroy())
    .then(() => res.status(200).json({ message: 'Student successfully deleted' }))
    .catch(err => res.status(500).json(err.message));
  })

  .put((req, res) => {
    Student.forge({ id: req.params.id })
    .fetch()
    .then(student => student.save({
      username: req.body.username || student.get('username'),
      name: req.body.name || student.get('name'),
      email: student.get('email'),
      github_user_name: student.get('github_user_name'),
      photo_url: student.get('photo_url'),
      gravatar_url: student.get('gravatar_url'),
      cohort_id: student.get('cohort_id'),
    }))
    .then(student => res.status(200).json(student))
    .catch(err => res.status(500).json(err.message));
  });

router.route('/students/campuses/:campus_id')
  .get((req, res) => {
    Students.forge({ campus_id: req.params.campus_id })
    .fetch()
    .then(students => res.status(200).json(students))
    .catch(err => res.status(500).json(err.message));
  });

router.route('/students/cohorts/:cohort_id')
  .get((req, res) => {
    Students.forge({ cohort_id: req.params.cohort_id })
    .fetch()
    .then(students => res.status(200).json(students))
    .catch(err => res.status(500).json(err.message));
  });

router.get('/students/:student_id/info', (req, res) => {
  points.getPtsEarned(Number(req.params.student_id))
    .then(() => points.getPtsUsed(Number(req.params.student_id)))
    .then(() => points.getStudentInfo(Number(req.params.student_id)))
    .then(() => {
      points.distributePts();
      res.status(200).json(points.calculatePts());
    })
    .catch(err => res.status(500).json(err.message));
});

module.exports = router;
