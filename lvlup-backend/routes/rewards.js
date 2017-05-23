const express = require('express');
const Rewards = require('../collections/rewards');
const Reward = require('../models/reward');
const authorize = require('../middleware/authorize');

const router = express.Router();

router.route('/rewards/')
  .post(authorize.isAdmin, (req, res) => {
    Reward.forge({
      name: req.body.name,
      point_cost: req.body.point_cost,
      description: req.body.description,
      campus_id: req.body.campus_id,
      category_id: req.body.category_id,
      active: 'Active',
    })
    .save()
    .then(reward => res.status(200).json(reward))
    .catch(err => res.status(500).json({ message: err.message }));
  });

router.route('/rewards/campuses/:campus_id')
  .get((req, res) => {
    Reward.forge({ campus_id: req.params.campus_id })
    .fetchAll({ withRelated: ['category'] })
    .then(rewards => res.status(200).json(rewards))
    .catch(err => res.status(500).json({ message: err.message }));
  });

router.route('/rewards/:id')
  .get((req, res) => {
    Reward.forge({ id: req.params.id })
    .fetch()
    .then(reward => res.status(200).json(reward))
    .catch(err => res.status(500).json({ message: err.message }));
  })

  .put(authorize.isAdmin, (req, res) => {
    Reward.forge({ id: req.params.id })
    .fetch()
    .then(reward => reward.save({
      name: req.body.name || reward.get('name'),
      point_cost: req.body.point_cost || reward.get('point_cost'),
      description: req.body.description || reward.get('description'),
      campus_id: req.body.campus_id || reward.get('campus_id'),
      category_id: req.body.category_id || reward.get('category_id'),
      active: req.body.active || reward.get('active'),
    }))
    .then(updatedReward => res.status(200).json(updatedReward))
    .catch(err => res.status(500).json({ message: err.message }));
  });

module.exports = router;
