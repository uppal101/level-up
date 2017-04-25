const express = require('express');
const knex = require('../knex.js');
const Rewards = require('../collections/rewards');
const Reward = require('../models/reward');

const router = express.Router();

// router.route('/rewards/');
//   .post((req, res) => {
//     Reward.forge({
//       name: req.body.name,
//       type: req.body.type,
//       q1_start_date: req.body.q1_start_date,
//       q2_start_date: req.body.q2_start_date,
//       q3_start_date: req.body.q3_start_date,
//       q4_start_date: req.body.q4_start_date,
//       graduation_date: req.body.graduation_date,
//       campus_id: req.body.campus_id,
//     })
//     .save()
//     .then((cohort) => {
//       res.status(200).json(cohort);
//     })
//     .catch(err => console.error(err));
//   });
module.exports = router;
