const nodemailer = require('nodemailer');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const transporter = nodemailer.createTransport({
  host: 'mail.privateemail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'lvlupteam@lvlup.tech',
    pass: process.env.EMAIL_PASSWORD,
  },
});

const signupEmailOptions = (email, url, token) => {
  const mailObject =
    {
      from: '"lvl^ Team" <lvlupteam@lvlup.tech>',
      to: email, // list of receivers
      subject: 'Confirm your Admin Account with lvl^',
      html: `<h1> Welcome to lvl^! </h1>
      <p>Please use the link below to confirm your admin account</p>
      <a href=${url}/api/admin/confirm/${token}>Click here to confirm</a>
      <p>If you believe you have received this email in error please contact lvlupteam@lvlup.tech </p>`,
      dsn: {
        id: 'signup',
        return: 'headers',
        notify: ['success', 'failure', 'delay'],
        recipient: 'lvlupteam@lvlup.tech',
      },
    };
  return mailObject;
};

module.exports = {
  transporter,
  signupEmailOptions,
};
