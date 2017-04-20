const Bookshelf = require('../bookshelf');
require('./reward_suggestion');
require('./student');

const RewardSuggestionStudent = Bookshelf.Model.extend({
  tableName: 'reward_suggestions_students',
  hasTimestamps: true,

  students() {
    return this.hasMany('Student');
  },
  rewardSuggestion() {
    return this.hasOne('RewardSuggestion');
  },
});

module.exports = Bookshelf.model('RewardSuggestionStudent', RewardSuggestionStudent);
