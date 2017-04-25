const express = require('express');
const Students = require('../collections/students');
const Student = require('../models/student');

const router = express.Router();

router.route('/students')
  .get((req, res) => {
    Students.forge()
    .fetch()
    .then((students) => {
      res.status(200).json(students);
    })
    .catch(err => res.status(500).json(err.message));
  });

router.route('/students/:id')
  .get((req, res) => {
    Student.forge({ id: req.params.id })
    .fetch()
    .then((student) => {
      res.status(200).json(student);
    })
    .catch(err => res.status(500).json(err.message));
  })

  .delete((req, res) => {
    Student.forge({ id: req.params.id })
    .fetch()
    .then(student => student.destroy())
    .then(() => {
      res.status(200).json({ message: 'Student successfully deleted' });
    })
    .catch(err => res.status(500).json(err.message));
  })

  .put((req, res) => {
    Student.forge({ id: req.params.id })
    .fetch()
    .then(student => student.save({
      username: req.body.username || student.get('username'),
      name: req.body.name || student.get('name'),
      email: student.get('email'),
      github_user_name: student.get('github_user_name'),
      photo_url: student.get('photo_url'),
      gravatar_url: student.get('gravatar_url'),
      cohort_id: student.get('cohort_id'),
    }))
    .then(student => res.status(200).json(student))
    .catch(err => res.status(500).json(err.message));
  });

router.route('/students/campuses/:campus_id')
  .get((req, res) => {
    Students.forge({ campus_id: req.params.campus_id })
    .fetch()
    .then((students) => {
      res.status(200).json(students);
    })
    .catch(err => res.status(500).json(err.message));
  });

router.route('/students/cohorts/:cohort_id')
  .get((req, res) => {
    Students.forge({ cohort_id: req.params.cohort_id })
    .fetch()
    .then((students) => {
      res.status(200).json(students);
    })
    .catch(err => res.status(500).json(err.message));
  });


// router.get('/students/:id', (req, res) => {
//   Student.forge({ id: req.params.id })
//   .fetch({
//     columns: ['email', 'first_name', 'id'],
//     withRelated: [ 'challengeSubmissions'
//       // {'challengeSubmissions': function(qb) { qb.column('id', 'challenge_id'); } }
//      , { 'challengeSubmissions.challenge': function (qb) {
//        console.log(qb);
//        qb.column('id', 'point_value', 'description'); } }
//    ],
//   })
//   .then((student) => {
//     res.status(200).json(student);
//   })
//   .catch(err => console.error(err));
// });

module.exports = router;
