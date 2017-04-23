const express = require('express');
const knex = require('../knex.js');
const Campuses = require('../collections/campuses');
const Campus = require('../models/campus');

const router = express.Router();

router.get('/campuses/', (req, res) => {
  Campuses.forge()
  .fetch()
  .then((campuses) => {
    // console.log(campuses)
    // delete campuses.id;
    // delete campuses.created_at;
    // delete campuses.updated_at;
    console.log(campuses.toJSON);
    res.status(200).json(campuses);
  })
  .catch(err => console.error(err))
})

router.post('/campuses/', (req, res) => {

})

module.exports = router;
