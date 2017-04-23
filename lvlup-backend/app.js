const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github2').Strategy;
const students = require('./routes/students');
const login = require('./routes/login');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(login);
app.use(students);

// passport.serializeUser(function (user, done) {
//   done(null, user);
// });
//
// passport.deserializeUser(function (obj, done) {
//   done(null, obj);
// });


// passport.use(new GitHubStrategy({
//   clientID: process.env.GITHUB_CLIENT_ID,
//   clientSecret: process.env.GITHUB_CLIENT_SECRET,
//   callbackURL: `${process.env.HOST}/auth/github/callback`,
// },
//   (accessToken, refreshToken, profile, done) => {
//     console.log('profile:', profile);
//   }));
//
// app.get('/auth/github',
//   passport.authenticate('github', { scope: ['user:email'] }));
//
// app.get('/auth/github/callback',
//   passport.authenticate('github', { failureRedirect: '/login' }),
//   (req, res) => {
//     // Successful authentication, redirect home.
//     res.json(res);
//   });

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
