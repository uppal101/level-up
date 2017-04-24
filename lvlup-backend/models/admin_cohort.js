const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

require('./cohort');
require('./admin');

const AdminCohort = LvlModel.extend({
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
