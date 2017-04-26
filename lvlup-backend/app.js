const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github2').Strategy;
const studentsRoute = require('./routes/students');
const cookieParser = require('cookie-parser');
const loginRoute = require('./routes/login');
const campusesRoute = require('./routes/campuses');
const challengesRoute = require('./routes/challenges');
const cohortsRoute = require('./routes/cohorts');
const adminsRoute = require('./routes/admins');
const rewardsRoute = require('./routes/rewards');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
  keys: [process.env.SESSION_KEY1, process.env.SESSION_KEY2],
  secret: 'bam',
  resave: false,
  saveUninitialized: true,
}));


passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: `${process.env.HOST}/api/auth/github/callback`,
},
  (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => done(null, profile));
  }));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.use(bodyParser.json());

app.use('/api', loginRoute);
app.use('/api', campusRoute);
app.use('/api', cohortsRoute);
app.use('/api', adminsRoute);
app.use('/api', rewardsRoute);
app.use('/api', studentsRoute);
app.use('/api', challengesRoute);


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

module.exports = app;
