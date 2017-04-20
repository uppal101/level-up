const Bookshelf = require('../bookshelf');
require('./student');
require('./reward_suggestion_student');

const RewardSuggestion = Bookshelf.Model.extend({
  tableName: 'reward_suggestions',
  hasTimestamps: true,

  rewardSuggestionStudents() {
    return this.belongsToMany('Student').through('RewardSuggestionStudent');
  },
});

module.exports = Bookshelf.model('RewardSuggestion', RewardSuggestion);
