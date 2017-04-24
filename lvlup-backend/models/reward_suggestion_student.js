const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

require('./reward_suggestion');
require('./student');

const RewardSuggestionStudent = LvlModel.extend({
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
