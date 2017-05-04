const express = require('express');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const session = require('express-session');
const router = express.Router();

router.route('/student/logout')
  .get((req, res) => {
    console.log('here');
    req.logout();
    res.redirect('/');
  });

router.route('/admin/logout')
  .get((req, res) => {
    res.cookie('authToken', null);
    res.redirect('/');
  });

module.exports = router;
