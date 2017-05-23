const express = require('express');
const Challenges = require('../collections/challenges');
const Challenge = require('../models/challenge');
const Campus = require('../models/campus');
const authorize = require('../middleware/authorize');

const router = express.Router();

router.route('/challenges/campuses/:campus_id')
  .get((req, res) => {
    Challenge.forge({ campus_id: req.params.campus_id })
    .fetchAll({ withRelated: ['category'] })
    .then((challenges) => {
      res.status(200).json(challenges);
    })
    .catch(err => res.status(500).json(err.message));
  });


router.route('/challenges/')
  .post(authorize.isAdmin, (req, res) => {
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
      active: 'Active',
    })
    .save()
    .then(challenge => res.status(200).json(challenge))
    .catch(err => res.status(500).json(err.message));
  });

router.route('/challenges/:challenge_id')
  .get((req, res) => {
    Challenge.forge({ id: req.params.challenge_id })
    .fetch()
    .then(challenge => res.status(200).json(challenge))
    .catch(err => res.status(500).json(err.message));
  })

  .put(authorize.isAdmin, (req, res) => {
    Challenge.forge({ id: req.params.challenge_id })
    .fetch()
    .then(challenge => challenge.save({
      name: req.body.name || challenge.get('name'),
      point_value: req.body.point_value || challenge.get('point_value'),
      description: req.body.description || challenge.get('description'),
      campus_id: req.body.campus_id || challenge.get('campus_id'),
      category_id: req.body.category_id || challenge.get('category_id'),
      requirements_1: req.body.requirements_1 || challenge.get('requirements_1'),
      requirements_2: req.body.requirements_2 || challenge.get('requirements_2'),
      requirements_3: req.body.requirements_3 || challenge.get('requirements_3'),
      requirements_4: req.body.requirements_4 || challenge.get('requirements_4'),
      requirements_5: req.body.requirements_5 || challenge.get('requirements_5'),
      active: req.body.active || challenge.get('active'),
    }))
    .then(challenge => res.status(200).json(challenge))
    .catch(err => res.status(500).json(err.message));
  });


module.exports = router;
