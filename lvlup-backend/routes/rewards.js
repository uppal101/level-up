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
  })

  .put((req, res) => {
    Reward.forge({ id: req.params.id })
    .fetch()
    .then(reward => reward.save({
      name: req.body.name || reward.get('name'),
      point_cost: req.body.point_cost || reward.get('point_cost'),
      description: req.body.description || reward.get('description'),
      campus_id: req.body.campus_id || reward.get('campus_id'),
      category_id: req.body.category_id || reward.get('category_id'),
    }))
    .then((updatedReward) => {
      res.json(updatedReward);
    })
    .catch((err) => {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  })

  .delete((req, res) => {
    Reward.forge({ id: req.params.id })
    .fetch({ require: true })
    .then((reward) => {
      reward.destroy();
    })
    .then(() => {
      res.json({ message: 'Reward successfully deleted' });
    })
    .catch((err) => {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  });

  // arbitrary

module.exports = router;
