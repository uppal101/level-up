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

router.route('/admins/:id')
.put((req, res) => {
  Admin.forge({ id: req.params.id })
  .fetch({ require: true })
  .then((admin) => {
    admin.save({
      username: req.body.username || admin.get('username'),
      first_name: req.body.first_name || admin.get('first_name'),
      last_name: req.body.last_name || admin.get('last_name'),
      email: req.body.email || admin.get('email'),
      gravatar_url: req.body.gravatar_url || admin.get('gravatar_url'),
      campus_id: req.body.campus_id || admin.get('campus_id'),
    })
    .then((admin) => {
      const updatedAdmin = JSON.parse(JSON.stringify(admin));
      delete updatedAdmin.id;
      delete updatedAdmin.hashed_password;
      delete updatedAdmin.updated_at;
      delete updatedAdmin.created_at;
      res.json({ updatedAdmin });
    });
  })
  .catch((err) => {
    res.status(500).json({ error: true, data: { message: err.message } });
  });
})

.delete((req, res) => {
  Admin.forge({ id: req.params.id })
  .fetch({ require: true })
  .then((admin) => {
    admin.destroy()
    .then(() => {
      res.json({ message: 'Admin successfully deleted' });
    })
    .catch((err) => {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  })
  .catch((err) => {
    res.status(500).json({ error: true, data: { message: err.message } });
  });
});


module.exports = router;
