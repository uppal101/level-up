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
const submissionsRoute = require('./routes/submissions');
const cohortsRoute = require('./routes/cohorts');
const adminsRoute = require('./routes/admins');
const rewardsRoute = require('./routes/rewards');
const requestsRoute = require('./routes/requests');
const logout = require('./routes/logout');
const cors = require('cors');
const authorize = require('./middleware/authorize');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
};

app.use(allowCrossDomain);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'build')));

app.use(session({
  keys: [process.env.SESSION_KEY1, process.env.SESSION_KEY2],
  secret: 'bam',
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: `${process.env.HOST}/api/auth/github/callback`,
},
  (accessToken, refreshToken, profile, done) => {
    // process.nextTick(() => done(null, profile));
    done(null, profile);
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


app.use('/api/students', authorize.isUser);
app.use('/api/submissions', authorize.isUser);
app.use('/api/requests', authorize.isUser);
app.use('/api/challenges', authorize.isUser);
app.use('/api/rewards', authorize.isUser);
app.use('/api/admins', authorize.isAdmin);

app.use('/api', loginRoute);
app.use('/api', campusesRoute);
app.use('/api', cohortsRoute);
app.use('/api', adminsRoute);
app.use('/api', rewardsRoute);
app.use('/api', requestsRoute);
app.use('/api', studentsRoute);
app.use('/api', challengesRoute);
app.use('/api', submissionsRoute);
app.use('/api', logout);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

module.exports = app;
