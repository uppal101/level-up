const express = require('express');
const app = express();
const router = express.Router();
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const knex = require('../knex.js');
const Students = require('../collections/students');
const Student = require('../models/student');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt-as-promised');
const Admin = require('../models/admin');
const AdminCohort = require('../models/admin_cohort');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

router.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }));

router.get('/auth/github/callback',
  passport.authenticate('github'),
  (req, res) => {
    res.redirect('/dashboard');
  });

router.get('/student/login', (req, res) => {
  Student.query({ where: { email: req.session.passport.user._json.email } })
    .fetch()
    .then((student) => {
      if (student === null) {
        Student.forge({
          name: req.session.passport.user._json.name,
          email: req.session.passport.user._json.email,
          github_user_name: req.session.passport.user._json.login,
          photo_url: req.session.passport.user._json.avatar_url,
        })
        .save()
        .then((signup) => {
          res.json(signup);
        });
      } else {
        res.json(student);
      }
    });
});

router.post('/admin/login', (req, res) => {
  Admin.query({ where: { email: req.body.email } })
    .fetch()
    .then((passToCompare) => {
      if (passToCompare === null) {
        res.status(400).json('Invalid password or username');
      } else {
        bcrypt.compare(req.body.password, passToCompare.attributes.hashed_password)
        .then(() => {
          Admin.query({ where: { email: req.body.email } })
          .fetch({ withRelated: ['cohorts.campus'] })
          .then((admin) => {
            const user = { userId: admin.id };
            const token = jwt.sign(user, process.env.JWT_KEY, {
              expiresIn: '7 days',
            });
            res.cookie('authToken', token);
            res.json(admin);
          });
        })
        .catch((err) => {
          res.status(400).json('Invalid password or username');
        });
      }
    });
});

router.post('/admin/signup', (req, res) => {
  Admin.query({ where: { email: req.body.email } })
  .fetch()
  .then((checkToSeeIfAlreadyRegistered) => {
    if (checkToSeeIfAlreadyRegistered === null) {
      bcrypt.hash(req.body.password, 1)
      .then((hashed) => {
        Admin.forge({
          username: req.body.username,
          name: req.body.name,
          email: req.body.email,
          campus_id: Number(req.body.campus_id),
          hashed_password: hashed,
        })
        .save()
        .then((newAdmin) => {
          const cohortsArr = req.body.cohorts;
          const promiseArr = [];
          for (let i = 0; i < cohortsArr.length; i++) {
            promiseArr.push(AdminCohort.forge({
              cohort_id: cohortsArr[i],
              admin_id: newAdmin.id,
            }).save());
          }
          Promise.all(promiseArr);
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => {
          Admin.query({ where: { email: req.body.email } })
          .fetch({ withRelated: ['cohorts.campus'] })
          .then((adminToSend) => {
            res.json(adminToSend);
          })
          .catch((err) => {
            console.error(err);
          });
        });
      });
    } else {
      res.status(400).json('User already exists!');
    }
  });
});
module.exports = router;
