const express = require('express');
const app = express();
const router = express.Router();
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const knex = require('../knex.js');
const Students = require('../collections/students');
const Student = require('../models/student');
const jwt = require('jsonwebtoken');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: `${process.env.HOST}/auth/github/callback`,
},
  (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => done(null, profile));
  }));

router.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }));

router.get('/auth/github/callback',
  passport.authenticate('github'),
  (req, res) => {
    Student.query({ where: { email: req.user.emails[0].value } })
      .fetch({ withRelated: ['challegeSubmissions', 'rewardRequests', 'cohort'] })
      .then((student) => {
        if (student.id) {
          const user = { userId: student.id };
          const token = jwt.sign(user, process.env.JWT_KEY, {
            expiresIn: '7 days',
          });
          res.set('Token', token);
          res.json(student);
        } else {
          res.json(req.user._json);
        }
      })
      .catch((err) => {
        res.json(req.user._json);
      });
  });

module.exports = router;
