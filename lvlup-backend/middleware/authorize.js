const Student = require('../models/student');

const isAdmin = (req, res, next) => {
  if (req.cookies.authToken) {
    next();
  } else {
    res.status(404).json('You must be an Administrator');
  }
};

const isUser = (req, res, next) => {
  if (req.session.passport || req.cookies.authToken) {
    next();
  } else {
    res.status(404).json('You must be logged in');
  }
};

const isAuthorized = (req, res, next) => {
  if (req.cookies.authToken) {
    next();
  } else {
    Student.forge({ id: req.params.id })
    .fetch()
    .then((student) => {
      console.log(student);
      if (req.session.passport.user._json.email === student.attributes.email) {
        next();
      } else {
        res.status(404).json('Unauthorized');
      }
    });
  }
};

module.exports = {
  isAdmin,
  isUser,
  isAuthorized,
};
