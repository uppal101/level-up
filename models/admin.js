const Bookshelf = require('../bookshelf');
require('./cohort');
require('./admin_cohort');
reqiore('./campus');

const Admin = Bookshelf.Model.extend({
  tableName: 'admins',
  hasTimestamps: true,

  cohorts: function() {
    return this.belongsToMany('Cohort').through('AdminCohort');
  },
  campus: function() {
    return this.belongsTo('Campus');
  }
});

module.exports = Bookshelf.model('Admin', Admin);
