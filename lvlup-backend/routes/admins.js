const express = require('express');
const Admins = require('../collections/admins');
const Admin = require('../models/admin');

const router = express.Router();


router.route('/admins/')
  .get((req, res) => {
    Admins.forge()
    .fetch()
    .then((admins) => {
      res.json({ admins });
    })
    .catch((err) => {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  });

router.route('/admins/:id')
  .put((req, res) => {
    Admin.forge({ id: req.params.id })
    .fetch()
    .then(admin => admin.save({
      username: req.body.username || admin.get('username'),
      name: req.body.name || admin.get('name'),
      email: req.body.email || admin.get('email'),
      gravatar_url: req.body.gravatar_url || admin.get('gravatar_url'),
      campus_id: req.body.campus_id || admin.get('campus_id'),
    }))
    .then((updatedAdmin) => {
      res.json({ updatedAdmin });
    })
    .catch((err) => {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  })

  .delete((req, res) => {
    Admin.forge({ id: req.params.id })
    .fetch({ require: true })
    .then((admin) => {
      admin.destroy();
    })
    .then(() => {
      res.json({ message: 'Admin successfully deleted' });
    })
    .catch((err) => {
      res.status(500).json({ error: true, data: { message: err.message } });
    });
  });


module.exports = router;
