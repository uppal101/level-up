const Bookshelf = require('../bookshelf');
const LvlCollection = require('./lvlCollection');
const RewardSuggestionStudent = require('../models/reward_suggestion_student');

const RewardSuggestionStudents = LvlCollection.extend({
  model: RewardSuggestionStudent,
});

module.exports = Bookshelf.collection('RewardSuggestionStudents', RewardSuggestionStudents);
