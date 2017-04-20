const Bookshelf = require('../bookshelf');
require('./reward_suggestion');
require('./student');

const RewardSuggestionStudent = Bookshelf.Model.extend({
  tableName: 'reward_suggestions_students',
  hasTimestamps: true,

  students: function() {
    return this.hasMany('Student');
  },
  reward_suggestion: function() {
    return this.hasOne('RewardSuggestion');
  },
});

module.exports = Bookshelf.model('RewardSuggestionStudent', RewardSuggestionsStudents);
