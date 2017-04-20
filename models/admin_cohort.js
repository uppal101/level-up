const Bookshelf = require('../bookshelf');
require('./cohort');
require('./admin');

const AdminCohort = Bookshelf.Model.extend({
  tableName: 'admin_cohorts',
  hasTimestamps: true,

  cohorts() {
    return this.hasMany('Cohort');
  },
  admin() {
    return this.hasMany('Admin');
  },
});

module.exports = Bookshelf.model('AdminCohort', AdminCohort);
