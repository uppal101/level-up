const express = require('express');
const knex = require('../knex.js');
const Cohorts = require('../collections/cohorts');
const Cohort = require('../models/cohort');

const router = express.Router();

router.route('/cohorts/')
  .get((req, res) => {
    Cohorts.forge()
    .fetch()
    .then((cohorts) => {
      const cohortsResponse = JSON.parse(JSON.stringify(cohorts));
      const allCohorts = cohortsResponse.map((ele) => {
        delete ele.id;
        delete ele.updated_at;
        delete ele.created_at;
        return ele;
      });
      res.json({ allCohorts });
    })
    .catch((err) => {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  })

  .post((req, res) => {
    Cohort.forge({
      name: req.body.name,
      type: req.body.type,
      q1_start_date: req.body.q1_start_date,
      q2_start_date: req.body.q2_start_date,
      q3_start_date: req.body.q3_start_date,
      q4_start_date: req.body.q4_start_date,
      graduation_date: req.body.graduation_date,
      campus_id: req.body.campus_id,
    })
    .save()
    .then((cohort) => {
      res.status(200).json(cohort);
    })
    .catch(err => console.error(err));
  });

router.route('/cohorts/:id')
  .get((req, res) => {
    Cohort.forge({ id: req.params.id })
    .fetch()
    .then((cohort) => {
      res.status(200).json(cohort);
    })
    .catch((err) => {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  })

  .delete((req, res) => {
    Cohort.forge({ id: req.params.id })
    .fetch({ require: true })
    .then(cohort => cohort.destroy())
    .then(() => res.json({ message: 'Cohort successfully deleted' }))
    .catch((err) => {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  });

router.route('/cohorts/campuses/:campus_id')
  .get((req, res) => {
    Cohort.forge({ campus_id: req.params.campus_id })
    .fetch()
    .then((cohorts) => {
      const cohortsResponse = JSON.parse(JSON.stringify(cohorts));
      delete cohortsResponse.id;
      delete cohortsResponse.created_at;
      delete cohortsResponse.updated_at;
      res.json({ cohortsResponse });
    })
    .catch((err) => {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  });

module.exports = router;
