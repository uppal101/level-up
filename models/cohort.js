const Bookshelf = require('../bookshelf');
require('./student');
require('./campus');
require('./admin');
require('./admin_cohort')

const Cohort = Bookshelf.Model.extend({
  tableName: 'cohorts',
  hasTimestamps: true,

  students: function() {
    return this.hasMany('Student');
  },
  campus: function() {
    return this.belongsTo('Campus');
  },
  admins: function() {
    return this.belongsToMany('Admin').through('AdminCohort');
  },
});

module.exports = Bookshelf.model('Student', Student);
