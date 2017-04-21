const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');
const LvlCollection = require('./lvlCollection');
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

const RewardSuggestionStudents = LvlCollection.extend({
  model: RewardSuggestionStudent,
});

module.exports = {
  RewardSuggestionStudent: Bookshelf.model('RewardSuggestionStudent', RewardSuggestionStudent),
  RewardSuggestionStudents: Bookshelf.collection('RewardSuggestionStudents', RewardSuggestionStudents),
};
