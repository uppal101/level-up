const express = require('express');
const app = express();
const router = express.Router();
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

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
    console.log('profile:', profile);
  }));

router.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }));

router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.json(res);
  });

module.exports = router;
