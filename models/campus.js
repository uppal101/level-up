const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');
const LvlCollection = require('./lvlCollection');
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

const Campuses = LvlCollection.extend({
  model: Campus,
});

module.exports = {
  Campus: Bookshelf.model('Campus', Campus),
  Campuses: Bookshelf.collection('Campuses', Campuses),
};
