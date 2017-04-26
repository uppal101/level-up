const express = require('express');
const Challenges = require('../collections/challenges');
const Challenge = require('../models/challenge');
const Campus = require('../models/campus');

const router = express.Router();

router.route('/challenges/campuses/:campus_id')
  .get((req, res) => {
    Campus.forge({ id: req.params.campus_id })
    .fetch({ withRelated: ['challenges'] })
    .then((campuses) => {
      const challenges = campuses.related('challenges');
      res.status(200).json(challenges);
    })
    .catch(err => res.status(500).json(err.message));
  });

module.exports = router;
