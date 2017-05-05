const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

require('./student');
require('./reward_suggestion_student');

const RewardSuggestion = LvlModel.extend({
  tableName: 'reward_suggestions',
  hasTimestamps: true,

  rewardSuggestionStudents() {
    return this.belongsToMany('Student').through('RewardSuggestionStudent');
  },
});

module.exports = Bookshelf.model('RewardSuggestion', RewardSuggestion);
