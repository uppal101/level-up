const express = require('express');
const Rewards = require('../collections/rewards');
const Reward = require('../models/reward');
const RewardRequests = require('../collections/reward_requests');
const RewardRequest = require('../models/reward_request');
const Campus = require('../models/campus');
const Cohort = require('../models/cohort');
const Student = require('../models/student');

const router = express.Router();

router.route('/requests/cohorts/:cohort_id')
  .get((req, res) => {
    RewardRequest.where({ id: req.params.cohort_id })
    .fetch({ withRelated: ['student'] })
    .then((student) => {
      console.log(student);
      const requests = student.related('rewardRequests');
      res.status(200).json(requests);
    })
    .catch(err => res.status(500).json(err.message));
  });

router.route('/requests/students/:student_id')
  .get((req, res) => {
    RewardRequest.where({ student_id: req.params.student_id })
    .fetchAll()
    .then(request => res.status(200).json(request))
    .catch(err => res.status(500).json(err.message));
  });

router.route('/requests')
  .post((req, res) => {
    RewardRequest.forge({
      student_id: req.body.student_id,
      reward_id: req.body.reward_id,
      cohort_id: req.body.cohort_id,
      status: req.body.status,
      notes: req.body.notes,
    })
    .save()
    .then(request => res.status(200).json(request))
    .catch(err => res.status(500).json(err.message));
  });

// router.route('/requests/students/:student_id')
//   .get((req, res) => {
//     Student.forge({ id: req.params.student_id })
//     .fetch({ withRelated: ['rewardRequests'] })
//     .then((student) => {
//       const requests = student.related('rewardRequests');
//       res.status(200).json(requests);
//     })
//     .catch(err => res.status(500).json(err.message));
//   });

// ---- ^^^^ AS AN EXAMPLE THE ABOVE ROUTE DOES THE SAME THING ^^^^ -----

router.route('/requests/students/:student_id')
  .get((req, res) => {
    RewardRequest.where({ student_id: req.params.student_id })
    .fetchAll()
    .then(requests => res.status(200).json(requests))
    .catch(err => res.status(500).json(err.message));
  });

router.route('/requests/:request_id')
  .get((req, res) => {
    RewardRequest.where({ id: req.params.request_id })
    .fetch()
    .then(request => res.status(200).json(request))
    .catch(err => res.status(500).json(err.message));
  })

  .delete((req, res) => {
    RewardRequest.where({ id: req.params.request_id })
    .fetch()
    .then(request => request.destroy())
    .then(() => res.status(200).json({ message: 'Request successfully deleted' }))
    .catch(err => res.status(500).json(err.message));
  })

  .put((req, res) => {
    RewardRequest.forge({ id: req.params.request_id })
    .fetch()
    .then(request => request.save({
      student_id: req.body.student_id || request.get('student_id'),
      reward_id: req.body.reward_id || request.get('reward_id'),
      cohort_id: req.body.cohort_id || request.get('cohort_id'),
      category_id: req.body.category_id || request.get('category_id'),
      request_message: req.body.request_message || request.get('request_message'),
      evaluation_message: req.body.evaluation_message || request.get('evaluation_message'),
      request_status: req.body.request_status || request.get('request_status'),
      request_attachment_1: req.body.request_attachment_1 || request.get('request_attachment_1'),
      request_attachment_2: req.body.request_attachment_2 || request.get('request_attachment_2'),
      request_attachment_3: req.body.request_attachment_3 || request.get('request_attachment_3'),
      request_image_link_1: req.body.request_image_link_1 || request.get('request_image_link_1'),
      request_image_link_2: req.body.request_image_link_2 || request.get('request_image_link_2'),
      request_image_link_3: req.body.request_image_link_3 || request.get('request_image_link_3'),
    }))
    .then(request => res.status(200).json(request))
    .catch(err => res.status(500).json(err.message));
  });

module.exports = router;
