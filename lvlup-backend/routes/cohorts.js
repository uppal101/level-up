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
      // console.log(cohorts)
      res.json({ error: false, data: cohorts });
    })
    .catch((err) => {
      res.status(500).json({error: true, data: { message: err.message } });
    });
  });

module.exports = router;
