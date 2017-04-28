const express = require('express');
const Challenges = require('../collections/challenges');
const Challenge = require('../models/challenge');
const ChallengeSubmissions = require('../collections/challenge_submissions');
const ChallengeSubmission = require('../models/challenge_submission');
const Campus = require('../models/campus');
const Cohort = require('../models/cohort');
const Student = require('../models/student');

const router = express.Router();

router.route('/submissions/cohorts/:cohort_id')
  .get((req, res) => {
    Cohort.where({ id: req.params.cohort_id })
    .fetch({ withRelated: ['challengeSubmissions'] })
    .then((cohort) => {
      const submissions = cohort.related('challengeSubmissions');
      res.status(200).json(submissions);
    })
    .catch(err => res.status(500).json(err.message));
  });

router.route('/submissions')
  .post((req, res) => {
    ChallengeSubmission.forge({
      student_id: req.body.student_id,
      challenge_id: req.body.challenge_id,
      cohort_id: req.body.cohort_id,
      category_id: req.body.category_id,
      submission_message: req.body.submission_message,
      evaluation_message: req.body.evaluation_message,
      submission_status: req.body.submission_status,
      submission_attachment_1: req.body.submission_attachment_1,
      submission_attachment_2: req.body.submission_attachment_2,
      submission_attachment_3: req.body.submission_attachment_3,
      submission_image_link_1: req.body.submission_image_link_1,
      submission_image_link_2: req.body.submission_image_link_2,
      submission_image_link_3: req.body.submission_image_link_3,
    })
    .save()
    .then(submission => res.status(200).json(submission))
    .catch(err => res.status(500).json(err.message));
  });

// router.route('/submissions/students/:student_id')
//   .get((req, res) => {
//     Student.forge({ id: req.params.student_id })
//     .fetch({ withRelated: ['challengeSubmissions'] })
//     .then((student) => {
//       const submissions = student.related('challengeSubmissions');
//       res.status(200).json(submissions);
//     })
//     .catch(err => res.status(500).json(err.message));
//   });

// ---- ^^^^ AS AN EXAMPLE THE ABOVE ROUTE DOES THE SAME THING ^^^^ -----

router.route('/submissions/students/:student_id')
  .get((req, res) => {
    ChallengeSubmission.where({ student_id: req.params.student_id })
    .fetchAll()
    .then(submissions => res.status(200).json(submissions))
    .catch(err => res.status(500).json(err.message));
  });

router.route('/submissions/:submission_id')
  .get((req, res) => {
    ChallengeSubmission.where({ id: req.params.submission_id })
    .fetch()
    .then(submission => res.status(200).json(submission))
    .catch(err => res.status(500).json(err.message));
  })

  .delete((req, res) => {
    ChallengeSubmission.where({ id: req.params.submission_id })
    .fetch()
    .then(submission => submission.destroy())
    .then(() => res.status(200).json({ message: 'Submission successfully deleted' }))
    .catch(err => res.status(500).json(err.message));
  })

  .put((req, res) => {
    ChallengeSubmission.forge({ id: req.params.submission_id })
    .fetch()
    .then(submission => submission.save({
      student_id: req.body.student_id || submission.get('student_id'),
      challenge_id: req.body.challenge_id || submission.get('challenge_id'),
      cohort_id: req.body.cohort_id || submission.get('cohort_id'),
      category_id: req.body.category_id || submission.get('category_id'),
      submission_message: req.body.submission_message || submission.get('submission_message'),
      evaluation_message: req.body.evaluation_message || submission.get('evaluation_message'),
      submission_status: req.body.submission_status || submission.get('submission_status'),
      submission_attachment_1: req.body.submission_attachment_1 || submission.get('submission_attachment_1'),
      submission_attachment_2: req.body.submission_attachment_2 || submission.get('submission_attachment_2'),
      submission_attachment_3: req.body.submission_attachment_3 || submission.get('submission_attachment_3'),
      submission_image_link_1: req.body.submission_image_link_1 || submission.get('submission_image_link_1'),
      submission_image_link_2: req.body.submission_image_link_2 || submission.get('submission_image_link_2'),
      submission_image_link_3: req.body.submission_image_link_3 || submission.get('submission_image_link_3'),
    }))
    .then(submission => res.status(200).json(submission))
    .catch(err => res.status(500).json(err.message));
  });

module.exports = router;
