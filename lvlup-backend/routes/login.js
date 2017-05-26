const express = require('express');
const app = express();
const router = express.Router();
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const Students = require('../collections/students');
const Student = require('../models/student');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt-as-promised');
const Admin = require('../models/admin');
const AdminCohort = require('../models/admin_cohort');
const path = require('path');
const nodemailer = require('nodemailer');
const mailControls = require('../helpers/nodemailer-setup');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

router.route('/auth/github')
  .get(passport.authenticate('github', { scope: ['user:email'] }));

router.route('/auth/github/callback')
  .get(passport.authenticate('github'),
  (req, res) => {
    res.redirect('/student/dashboard');
  });

router.route('/student/login')
  .get((req, res) => {
    Student.where({ github_id: Number(req.session.passport.user.id) })
    .fetch()
    .then((student) => {
      if (student === null) {
        Student.forge({
          github_id: Number(req.session.passport.user.id),
          name: req.session.passport.user._json.name,
          email: req.session.passport.user._json.email,
          github_user_name: req.session.passport.user._json.login,
          photo_url: req.session.passport.user._json.avatar_url,
        })
        .save()
        .then((signup) => {
          res.json(signup);
        })
        .catch((err) => {
          res.status(400).json({ error: 'You have encountered an error. To sign up with GitHub you must have a public email. To set your email to public please go to Settings > Public profile and public email and select an email' });
        });
      } else {
        res.json(student);
      }
    })
    .catch((err) => {
      res.status(400).json({ error: 'You have encountered an error. To sign up with GitHub you must have a public email. To set your email to public please go to Settings > Public profile and public email and select an email' });
    });
  })
  .put((req, res) => {
    Student.forge({ email: req.session.passport.user._json.email })
    .fetch()
    .then(student => student.save({
      student_id: student.get('student_id'),
      name: student.get('name'),
      email: student.get('email'),
      github_user_name: student.get('github_user_name'),
      photo_url: student.get('photo_url'),
      username: req.body.username,
      cohort_id: req.body.cohort_id,
    }))
    .then(updatedStudent => res.json(updatedStudent))
    .catch(err => res.status(500).json(err.message));
  });

router.route('/admin/login')
  .post((req, res) => {
    Admin.query({ where: { email: req.body.email } })
      .fetch()
      .then((passToCompare) => {
        if (passToCompare === null) {
          res.status(400).json('Invalid password or username');
        } else {
          bcrypt.compare(req.body.password, passToCompare.attributes.hashed_password)
          .then(() => Admin.query({ where: { email: req.body.email } })
            .fetch({ withRelated: ['cohorts.campus'] })
            .then((admin) => {
              if (admin.attributes.confirmed) {
                const user = { userId: admin.id };
                const token = jwt.sign(user, process.env.JWT_KEY, {
                  expiresIn: '7 days',
                });
                res.cookie('authToken', token);
                res.json(admin);
              } else {
                res.json({ confirmed: false });
              }
            }))
          .catch((err) => {
            res.status(400).json('Invalid password or username');
          });
        }
      });
  });

router.route('/admin/signup')
  .post((req, res) => {
    // save admin to admin table
    bcrypt.hash(req.body.password, 1)
    .then(hashed => Admin.forge({
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      campus_id: Number(req.body.campuses),
      hashed_password: hashed,
      confirmed: false,
    })
    .save())
    .catch((err) => {
      console.error(err);
      res.status(400).json({ error: 'User already exists' });
    })
    .then((newAdmin) => {
      // save the admin and their cohorts they are apart of to the admin_cohort table
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
      res.json({ error: 'Server Error - Please Try Again' });
    })
    .then(() => Admin.query({ where: { email: req.body.email } })
      .fetch())
    .then((admin) => {
      // create token to send with confirm email to confirm an admin and they have access to a galvanize account.
      const user = { userId: admin.id };
      const token = jwt.sign(user, process.env.JWT_KEY, {
        expiresIn: '7 days',
      });
      return token;
    })
    .then((tokenToSend) => {
      // send the email confirmation
      const signUpEmail = mailControls.signupEmailOptions(req.body.email, process.env.HOST, tokenToSend);
      mailControls.transporter.sendMail(signUpEmail, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
      });
      // sends the information to the front end for the front end to display for the admin to confirm via email
      res.status(200).json({
        needConfirm: 'Please wait for email to confirm',
        status: true,
      });
    })
    .catch((err) => {
      console.error(err);
    });
  });

router.route('/admin/confirm/:token')
  .get((req, res) => {
    // verifies token that was sent to the user.
    jwt.verify(req.params.token, process.env.JWT_KEY, (err, payload) => {
      if (err) {
        res.status(401).json('Unauthorized');
      } else {
        const userId = Number(payload.userId);
        // change user to confired and can access their admin page on sign in
        Admin.query({ where: { id: payload.userId } })
        .fetch()
        .then(admin => admin.save({
          confirmed: true,
        }))
        .then((redirect) => {
          res.redirect('/login-admin');
        });
      }
    });
  });

module.exports = router;
