const express = require('express');
const Admins = require('../collections/admins');
const Admin = require('../models/admin');
const AdminCohort = require('../models/admin_cohort');


const router = express.Router();

router.route('/admins/')
  .get((req, res) => {
    Admins.forge()
    .fetch()
    .then(admins => res.status(200).json(admins))
    .catch(err => res.status(500).json(err.message));
  });

router.route('/admins/:id')
  .get((req, res) => {
    Admin.forge({ id: req.params.id })
    .fetch({ withRelated: ['cohorts.campus'] })
    .then(admin => res.status(200).json(admin));
  })

  .put((req, res) => {
    Admin.forge({ id: req.params.id })
    .fetch()
    .then(admin => admin.save({
      username: req.body.username || admin.get('username'),
      name: req.body.name || admin.get('name'),
      email: req.body.email || admin.get('email'),
      gravatar_url: req.body.gravatar_url || admin.get('gravatar_url'),
      campus_id: req.body.campus_id || admin.get('campus_id'),
    }))
    .then(updatedAdmin => res.status(200).json(updatedAdmin))
    .catch(err => res.status(500).json(err.message));
  })

  .delete((req, res) => {
    Admin.forge({ id: req.params.id })
    .fetch({ require: true })
    .then(admin => admin.destroy())
    .then(() => res.status(200).json({ message: 'Admin successfully deleted' }))
    .catch(err => res.status(500).json(err.message));
  });

router.route('/admins/:id/cohorts')
  .post((req, res) => {
    const cohortsArr = req.body.cohorts;
    const promiseArr = [];
    for (let i = 0; i < cohortsArr.length; i++) {
      promiseArr.push(AdminCohort.forge({
        cohort_id: Number(cohortsArr[i]),
        admin_id: Number(req.params.id),
      }).save());
    }
    Promise.all(promiseArr)
    .then(newInfo => AdminCohort.where({ admin_id: Number(req.params.id) })
      .fetchAll({ withRelated: { cohort: q => q.column('id', 'name') } }))
    .then((adminsCohorts) => {
      const cohortsList = adminsCohorts.models.map(ele => ele.relations.cohort.attributes.name);
      console.log(cohortsList);
      res.status(200).json(cohortsList);
    })
    .catch((err) => {
      console.log(err);
    });
  });

module.exports = router;
