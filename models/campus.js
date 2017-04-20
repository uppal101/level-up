const Bookshelf = require('../bookshelf');
require('./cohort');
require('./admin');

const Campus = Bookshelf.Model.extend({
  tableName: 'campuses',
  hasTimestamps: true,

  cohorts: function() {
    return this.hasMany('Cohort');
  },
  admins: function() {
    return this.hasMany('Admin');
  },
});

module.exports = Bookshelf.model('Campus', Campus);
