const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

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

module.exports = Bookshelf.model('Student', Student);
