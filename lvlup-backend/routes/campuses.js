const express = require('express');
const knex = require('../knex.js');
const Campuses = require('../collections/campuses');
const Campus = require('../models/campus');

const router = express.Router();

router.get('/campuses', (req, res) => {
  Campuses
})

module.exports = router;
