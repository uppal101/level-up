const express = require('express');
const app = express();
const router = express.Router();
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const knex = require('../knex.js');
const Students = require('../collections/students');
const Student = require('../models/student');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const session = require('express-session');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

router.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }));

router.get('/auth/github/callback',
  passport.authenticate('github'),
  (req, res) => {
    res.redirect('/dashboard');
  });

router.get('/student/login', (req, res) => {
  Student.query({ where: { email: req.session.passport.user._json.email } })
    .fetch()
    .then((student) => {
      if (student === null) {
        Student.forge({
          name: req.session.passport.user._json.name,
          email: req.session.passport.user._json.email,
          github_user_name: req.session.passport.user._json.login,
          photo_url: req.session.passport.user._json.avatar_url,
        })
        .save()
        .then((signup) => {
          res.json(signup);
        });
      } else {
        res.json(student);
      }
    });
});

module.exports = router;
