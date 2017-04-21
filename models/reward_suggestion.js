const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');
const LvlCollection = require('./lvlCollection');
require('./student');
require('./reward_suggestion_student');

const RewardSuggestion = LvlModel.extend({
  tableName: 'reward_suggestions',
  hasTimestamps: true,

  rewardSuggestionStudents() {
    return this.belongsToMany('Student').through('RewardSuggestionStudent');
  },
});

const RewardSuggestions = LvlCollection.extend({
  model: RewardSuggestion,
});

module.exports = {
  RewardSuggestion: Bookshelf.model('RewardSuggestion', RewardSuggestion),
  RewardSuggestions: Bookshelf.collection('RewardSuggestions', RewardSuggestions),
};
