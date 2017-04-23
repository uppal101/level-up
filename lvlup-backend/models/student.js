const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

require('./cohort');
require('./reward_suggestion_student');

const Student = LvlModel.extend({
  tableName: 'students',
  hasTimestamps: true,

  cohort() {
    return this.belongsTo('Cohort');
  },
  rewardSuggestionStudents() {
    return this.belongsToMany('RewardSuggestions').through('RewardSuggestionStudent');
  },
});

module.exports = Bookshelf.model('Student', Student);
