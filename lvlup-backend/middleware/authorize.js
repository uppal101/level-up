const isAdmin = (req, res, next) => {
  if (req.cookies.authToken) {
    console.log('isAdmin');
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

module.exports = {
  isAdmin,
  isUser,
};

// const verifyEmail = (req, res, next) => {
//   if (!req.session.passport) {
//     return false;
//   }
//   return req.session.passport.user._json.email === student.attributes.email;
// };
