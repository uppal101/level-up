const express = require('express');
const knex = require('../knex.js');

const router = express.Router();

router.post('/signup', (req, res) => {
  // After being redirected from signup page.
  // All information regarding student signup gotten from
  // GitHub and the cohort information is added to the database.
  // Student is redirected here to dashboard!
});
