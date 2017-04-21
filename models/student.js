const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');
const LvlCollection = require('./lvlCollection');
require('./cohort');
require('./point');
require('./reward_suggestion');

const Student = LvlModel.extend({
  tableName: 'students',
  hasTimestamps: true,

  cohort() {
    return this.belongsTo('Cohort');
  },
  points() {
    return this.hasMany('Point');
  },
  rewardSuggestionStudents() {
    return this.belongsToMany('RewardSuggestions').through('RewardSuggestionStudent');
  },

});

const Students = LvlCollection.extend({
  model: Student,
});

module.exports = {
  Student: Bookshelf.model('Student', Student),
  Students: Bookshelf.collection('Students', Students),
};
