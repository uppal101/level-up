const express = require('express');
const knex = require('../knex.js');
const Students = require('../collections/students');
const Student = require('../models/student');

const router = express.Router();

router.get('/students', (req, res) => {
  Students.forge()
  .fetch()
  .then((students) => {
    console.log(students.toJSON());
    res.status(200).json(students);
  })
  .catch(err => console.error(err));
});

module.exports = router;
