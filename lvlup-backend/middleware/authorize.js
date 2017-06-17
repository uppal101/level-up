const Student = require('../models/student');

const isAdmin = (req, res, next) => {
  if (req.cookies.authToken) {
    next();
  } else {
    res.set('Content-Type', 'text/plain');
    res.sendStatus(401).send('You must be an Administrator');
  }
};

const isUser = (req, res, next) => {
  if (req.session.passport || req.cookies.authToken) {
    next();
  } else {
    res.set('Content-Type', 'text/plain');
    res.sendStatus(401).send('You must be logged in');
  }
};

const isAuthorized = (req, res, next) => {
  if (req.cookies.authToken) {
    next();
  } else {
    Student.forge({ id: req.params.id })
    .fetch()
    .then((student) => {
      if (req.session.passport.user._json.email === student.attributes.email) {
        next();
      } else {
        res.set('Content-Type', 'text/plain');
        res.sendStatus(401).send('Unauthorized');
      }
    });
  }
};

module.exports = {
  isAdmin,
  isUser,
  isAuthorized,
};
