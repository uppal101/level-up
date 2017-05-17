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

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

router.route('/auth/github')
  .get(passport.authenticate('github', { scope: ['user:email'] }));

router.route('/auth/github/callback')
  .get(passport.authenticate('github'),
  (req, res) => {
    console.log(req.session);
    res.redirect('/student/dashboard');
  });

router.route('/student/login')
  .get((req, res) => {
    Student.where({ email: req.session.passport.user._json.email })
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
              const user = { userId: admin.id };
              const token = jwt.sign(user, process.env.JWT_KEY, {
                expiresIn: '7 days',
              });
              res.cookie('authToken', token);
              res.json(admin);
            }))
          .catch((err) => {
            res.status(400).json('Invalid password or username');
          });
        }
      });
  });

router.route('/admin/signup')
    .post((req, res) => {
      console.log(req.body);
      Admin.query({ where: { email: req.body.email } })
      .fetch()
      .then((checkToSeeIfAlreadyRegistered) => {
        if (checkToSeeIfAlreadyRegistered === null) {
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
          .then(() => Admin.query({ where: { email: req.body.email } })
            .fetch())
          .then((admin) => {
            const user = { userId: admin.id };
            const token = jwt.sign(user, process.env.JWT_KEY, {
              expiresIn: '7 days',
            });
            return token;
          })
          .then((tokenToSend) => {
            const transporter = nodemailer.createTransport({
              host: 'mail.privateemail.com',
              port: 587,
              secure: false,
              auth: {
                user: 'lvlupteam@lvlup.tech',
                pass: process.env.EMAIL_PASSWORD,
              },
            });
            const url = `http://lvlup-galvanize.herokuapp.com/api/admin/confirm/${tokenToSend}`;
            const mailOptions = {
              from: '"lvl^ Team" <lvlupteam@lvlup.tech>', // sender address
              to: req.body.email, // list of receivers
              subject: 'Confirm your Admin Account with lvl^', // Subject line
              text: 'Welcome to lvl^ please click the link below to confirm your Admin Account', // plain text body
              html: `<a href=http://localhost:3000/api/admin/confirm/${tokenToSend}>Click here to confirm</a>`, // html body
              dsn: {
                id: 'signup',
                return: 'headers',
                notify: ['success', 'failure', 'delay'],
                recipient: 'lvlupteam@lvlup.tech',
              },
            };
            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                return console.log(error);
              }
            });
            res.status(200).json({
              needConfirm: 'Please wait for email to confirm',
              status: true,
            });
          })
          .catch((err) => {
            console.error(err);
          });
        } else {
          res.status(400).json('User already exists!');
        }
      });
    });

router.route('/admin/confirm/:token')
  .get((req, res) => {
    jwt.verify(req.params.token, process.env.JWT_KEY, (err, payload) => {
      if (err) {
        res.status(401).json('Unauthorized');
      } else {
        const userId = Number(payload.userId);
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
