const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github2').Strategy;
const students = require('./routes/students');
const loginRoute = require('./routes/login');
const studentsRoute = require('./routes/students');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(loginRoute);
app.use(studentsRoute);


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
