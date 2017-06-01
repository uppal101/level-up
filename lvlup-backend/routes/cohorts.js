const express = require('express');
const Cohorts = require('../collections/cohorts');
const Cohort = require('../models/cohort');
const authorize = require('../middleware/authorize');

const router = express.Router();

router.route('/cohorts/')
  .get((req, res) => {
    Cohorts.forge()
    .fetch()
    .then(cohorts => res.status(200).json(cohorts))
    .catch(err => res.status(500).json(err.message));
  })

  .post(authorize.isAdmin, (req, res) => {
    console.log(req.body);
    Cohort.forge({
      name: req.body.name,
      type: req.body.type,
      q1_start_date: req.body.q1_start_date,
      q2_start_date: req.body.q2_start_date,
      q3_start_date: req.body.q3_start_date,
      q4_start_date: req.body.q4_start_date,
      graduation_date: req.body.graduation_date,
      campus_id: Number(req.body.campuses),
    })
    .save()
    .then(cohort => res.status(200).json(cohort))
    .catch(err => res.status(500).json(err.message));
  });

router.route('/cohorts/:id')
  .get((req, res) => {
    Cohort.forge({ id: req.params.id })
    .fetch()
    .then(cohort => res.status(200).json(cohort))
    .catch(err => res.status(500).json(err.message));
  })

  .delete(authorize.isAdmin, (req, res) => {
    Cohort.forge({ id: req.params.id })
    .fetch({ require: true })
    .then(cohort => cohort.destroy())
    .then(() => res.json({ message: 'Cohort successfully deleted' }))
    .catch(err => res.status(500).json(err.message));
  });

router.route('/cohorts/campuses/:campus_id')
  .get((req, res) => {
    Cohort.where({ campus_id: req.params.campus_id })
    .fetchAll()
    .then(cohorts => res.status(200).json(cohorts))
    .catch(err => res.status(500).json(err.message));
  });

module.exports = router;
