const express = require('express');
const knex = require('../knex.js');
const Rewards = require('../collections/rewards');
const Reward = require('../models/reward');

const router = express.Router();

router.route('/rewards/')
  .post((req, res) => {
    Reward.forge({
      name: req.body.name,
      point_cost: req.body.point_cost,
      description: req.body.description,
      campus_id: req.body.campus_id,
      category_id: req.body.category_id,
    })
    .save()
    .then((reward) => {
      res.status(200).json(reward);
    })
    .catch(err => console.error(err));
  });

router.route('/rewards/:id')
  .get((req, res) => {
    Reward.forge({ id: req.params.id })
    .fetch()
    .then((reward) => {
      res.status(200).json(reward);
    })
    .catch((err) => {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  });
module.exports = router;
