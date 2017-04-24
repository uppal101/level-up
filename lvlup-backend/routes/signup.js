const express = require('express');
const knex = require('../knex.js');
const Students = require('../collections/students');
const Student = require('../models/student');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/signup/students', (req, res) => {
  Student.forge({
    name: req.body.name,
    email: req.body.email,
    github_user_name: req.body.github_user_name,
    photo_url: req.body.photo_url,
    cohort_id: Number(req.body.cohort_id),
    username: req.body.username,
  })
  .save()
  .then((newStudent) => {
    Student.query({ where: { email: newStudent.attributes.email } })
      .fetch({ withRelated: ['challegeSubmissions', 'rewardRequests', 'cohort'] })
      .then((student) => {
        const user = { userId: student.id };
        const token = jwt.sign(user, process.env.JWT_KEY, {
          expiresIn: '7 days',
        });
        res.set('Token', token);
        res.json(student);
      })
      .catch((err) => {
        res.status(500).json({ error: true, data: { message: err.message } });
      });
  });
});

module.exports = router;
