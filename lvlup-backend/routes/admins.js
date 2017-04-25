const express = require('express');
const knex = require('../knex.js');
const Admins = require('../collections/admins');
const Admin = require('../models/admin');

const router = express.Router();


router.route('/admins/')
.get((req, res) => {
  Admins.forge()
  .fetch()
  .then((admins) => {
    const adminsResponse = JSON.parse(JSON.stringify(admins));
    const allAdmins = adminsResponse.map((ele) => {
      delete ele.id;
      delete ele.hashed_password;
      delete ele.updated_at;
      delete ele.created_at;
      return ele;
    });
    res.json({ allAdmins });
  })
  .catch((err) => {
    res.status(500).json({ error: true, data: { message: err.message } });
  });
});

module.exports = router;
