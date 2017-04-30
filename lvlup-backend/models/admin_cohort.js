const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

require('./cohort');
require('./admin');

const AdminCohort = LvlModel.extend({
  tableName: 'admin_cohorts',
  hasTimestamps: true,

  cohort() {
    return this.belongsTo('Cohort');
  },
  admin() {
    return this.belongsTo('Admin');
  },
});

module.exports = Bookshelf.model('AdminCohort', AdminCohort);
