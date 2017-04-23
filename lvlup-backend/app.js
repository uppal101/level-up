const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github2').Strategy;
const students = require('./routes/students');
const login = require('./routes/login');

// const path = require('path');
//
// app.use(express.static(path.join('public')));

const students = require('./routes/students');
app.use(students);

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(login);
app.use(students);


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
