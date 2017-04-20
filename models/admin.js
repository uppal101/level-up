const Bookshelf = require('../bookshelf');
require('./cohort');
require('./admin_cohort');
require('./campus');

const Admin = Bookshelf.Model.extend({
  tableName: 'admins',
  hasTimestamps: true,

  cohorts() {
    return this.belongsToMany('Cohort').through('AdminCohort');
  },
  campus() {
    return this.belongsTo('Campus');
  },
});

module.exports = Bookshelf.model('Admin', Admin);
