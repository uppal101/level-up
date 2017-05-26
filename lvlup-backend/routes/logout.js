const express = require('express');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const session = require('express-session');
const router = express.Router();

router.route('/student/logout')
  .get((req, res) => {
    req.logout();
    res.sendStatus(200);
  });

router.route('/admin/logout')
  .get((req, res) => {
    res.clearCookie('authToken');
    res.sendStatus(200);
  });

module.exports = router;
