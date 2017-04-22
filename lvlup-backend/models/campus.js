const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

require('./cohort');
require('./admin');

const Campus = LvlModel.extend({
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
