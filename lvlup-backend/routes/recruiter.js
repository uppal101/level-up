const express = require('express');
const router = express.Router();
const Recruiter = require('../models/recruiter');
const nodemailer = require('nodemailer');
const mailControls = require('../helpers/nodemailer-setup');

router.route('/recruiter')
  .post((req, res) => {
    Recruiter.forge({
      email: req.body.email,
    })
    .save()
    .then((savedRecruiter) => {
      const recruiterEmail = mailControls.recruiterEmail(req.body.email, process.env.HOST);
      mailControls.transporter.sendMail(recruiterEmail, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
      });
      res.status(200).json({ success: 'You have successfully made a request for log in credentials. Please check your email.' });
    });
  });

module.exports = router;
