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
      console.log(challenges);
      res.status(200).json(challenges);
    })
    .catch(err => res.status(500).json(err.message));
  });

router.route('/challenges/')
  .post((req, res) => {
    console.log('hello');
    Challenge.forge({
      name: req.body.name,
      point_value: req.body.point_value,
      description: req.body.description,
      campus_id: req.body.campus_id,
      category_id: req.body.category_id,
      requirements_1: req.body.requirements_1,
      requirements_2: req.body.requirements_2,
      requirements_3: req.body.requirements_3,
      requirements_4: req.body.requirements_4,
      requirements_5: req.body.requirements_5,
    })
    .save()
    .then((challenge) => {
      res.status(200).json(challenge);
    })
    .catch(err => console.error(err));
  });


module.exports = router;
