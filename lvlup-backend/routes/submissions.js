const express = require('express');
const ChallengeSubmission = require('../models/challenge_submission');
const authorize = require('../middleware/authorize');

const router = express.Router();

router.route('/submissions/cohorts/:cohort_id')
  .get((req, res) => {
    ChallengeSubmission.where({ cohort_id: req.params.cohort_id })
    .fetchAll({ withRelated: [
      { category: (q) => { q.column('id', 'category'); } },
      { challenge: (q) => { q.column('id', 'name', 'point_value', 'description', 'requirements_1', 'requirements_2', 'requirements_3', 'requirements_4', 'requirements_5'); } },
      { student: (q) => { q.column('id', 'username', 'name'); } }],
    })
    .then(submissions => res.status(200).json(submissions))
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
      submission_status: 'Pending approval',
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

router.route('/submissions/students/:student_id')
  .get((req, res) => {
    ChallengeSubmission.where({ student_id: req.params.student_id })
    .fetchAll({ withRelated: [
      { category: (q) => { q.column('id', 'category'); } },
      { challenge: (q) => { q.column('id', 'name', 'point_value', 'description'); } },
      { student: (q) => { q.column('id', 'username', 'name'); } }],
    })
    .then(submissions => res.status(200).json(submissions))
    .catch(err => res.status(500).json(err.message));
  });

router.route('/submissions/:submission_id')
  .get((req, res) => {
    ChallengeSubmission.where({ id: req.params.submission_id })
    .fetch({ withRelated: [
      { category: (q) => { q.column('id', 'category'); } },
      { challenge: (q) => { q.column('id', 'name', 'point_value', 'description', 'requirements_1', 'requirements_2', 'requirements_3', 'requirements_4', 'requirements_5'); } },
      { student: (q) => { q.column('id', 'username', 'name'); } }] })
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
      student_id: submission.get('student_id'),
      challenge_id: submission.get('challenge_id'),
      cohort_id: submission.get('cohort_id'),
      category_id: submission.get('category_id'),
      submission_status: submission.get('submission_status'),
      evaluation_message: submission.get('evaluation_message'),
      submission_message: req.body.submission_message || submission.get('submission_message'),
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

router.route('/submissions/:submission_id/admin')
  .put(authorize.isAdmin, (req, res) => {
    ChallengeSubmission.forge({ id: req.params.submission_id })
    .fetch()
    .then(submission => submission.save({
      student_id: submission.get('student_id'),
      challenge_id: submission.get('challenge_id'),
      cohort_id: submission.get('cohort_id'),
      category_id: submission.get('category_id'),
      submission_message: submission.get('submission_message'),
      evaluation_message: req.body.evaluation_message || submission.get('evaluation_message'),
      submission_status: req.body.submission_status || submission.get('submission_status'),
      submission_attachment_1: submission.get('submission_attachment_1'),
      submission_attachment_2: submission.get('submission_attachment_2'),
      submission_attachment_3: submission.get('submission_attachment_3'),
      submission_image_link_1: submission.get('submission_image_link_1'),
      submission_image_link_2: submission.get('submission_image_link_2'),
      submission_image_link_3: submission.get('submission_image_link_3'),
    }))
    .then(submission => res.status(200).json(submission))
    .catch(err => res.status(500).json(err.message));
  });

module.exports = router;
