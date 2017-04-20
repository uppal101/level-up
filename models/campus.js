const Bookshelf = require('../bookshelf');
require('./cohort');
require('./admin');

const Campus = Bookshelf.Model.extend({
  tableName: 'campuses',
  hasTimestamps: true,

  cohorts() {
    return this.hasMany('Cohort');
  },
  admins() {
    return this.hasMany('Admin');
  },
});

module.exports = Bookshelf.model('Campus', Campus);
