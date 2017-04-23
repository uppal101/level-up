const express = require('express');
const app = express();
const router = express.Router();
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const knex = require('../knex.js');
const Students = require('../collections/students');
const Student = require('../models/student');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: `${process.env.HOST}/auth/github/callback`,
},
  (accessToken, refreshToken, profile, done) => {
    // console.log('profile email:', profile.emails[0].value);
    // 'access json file', profile._json
    Students.query('where', 'email', '=', profile.emails[0].value)
    .fetch()
    .then((student) => {
      console.log(student.models[0].attributes);
    });
    // Student.oauthCheck(profile.emails[0].value)
    // .then((student) => {
    //   console.log(student.toJSON());
    // });
    // .catch(err => console.error(err));
  }));

router.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }));

router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    console.log('here');
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = router;
