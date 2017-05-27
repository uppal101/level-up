const express = require('express');
const RewardRequest = require('../models/reward_request');
const authorize = require('../middleware/authorize');

const router = express.Router();

router.route('/requests/cohorts/:cohort_id')
  .get((req, res) => {
    RewardRequest.where({ cohort_id: req.params.cohort_id })
    .fetchAll({ withRelated: [
      { category: (q) => { q.column('id', 'category'); } },
      { reward: (q) => { q.column('id', 'name', 'point_cost', 'description'); } },
      { student: (q) => { q.column('id', 'username', 'name'); } }] })
    .then(requests => res.status(200).json(requests))
    .catch(err => res.status(500).json(err.message));
  });

router.route('/requests/students/:student_id')
  .get((req, res) => {
    RewardRequest.where({ student_id: req.params.student_id })
    .fetchAll({ withRelated: [
      { category: (q) => { q.column('id', 'category'); } },
      { reward: (q) => { q.column('id', 'name', 'point_cost', 'description'); } },
      { student: (q) => { q.column('id', 'username', 'name'); } }] })
    .then(requests => res.status(200).json(requests))
    .catch(err => res.status(500).json(err.message));
  });

router.route('/requests')
  .post((req, res) => {
    RewardRequest.forge({
      student_id: req.body.student_id,
      reward_id: req.body.reward_id,
      cohort_id: req.body.cohort_id,
      notes: req.body.notes,
      category_id: req.body.category_id,
      status: 'Pending approval',
    })
    .save()
    .then(request => res.status(200).json(request))
    .catch(err => res.status(500).json(err.message));
  });

router.route('/requests/:request_id')
  .get((req, res) => {
    RewardRequest.where({ id: req.params.request_id })
    .fetch({ withRelated: [
      { category: (q) => { q.column('id', 'category'); } },
      { reward: (q) => { q.column('id', 'name', 'point_cost', 'description'); } },
      { student: (q) => { q.column('id', 'username', 'name'); } }] })
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
      student_id: request.get('student_id'),
      reward_id: request.get('reward_id'),
      cohort_id: request.get('cohort_id'),
      status: request.get('status'),
      notes: req.body.notes || request.get('notes'),
    }))
    .then(request => res.status(200).json(request))
    .catch(err => res.status(500).json(err.message));
  });

router.route('/requests/:request_id/admin')
  .put(authorize.isAdmin, (req, res) => {
    RewardRequest.forge({ id: req.params.request_id })
    .fetch()
    .then(request => request.save({
      student_id: request.get('student_id'),
      reward_id: request.get('reward_id'),
      cohort_id: request.get('cohort_id'),
      status: req.body.status.status || request.get('status'),
      notes: request.get('notes'),
    }))
    .then(request => res.status(200).json(request))
    .catch(err => res.status(500).json(err.message));
  });

module.exports = router;
