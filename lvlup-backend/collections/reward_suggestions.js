const Bookshelf = require('../bookshelf');
const LvlCollection = require('./lvlCollection');
const RewardSuggestion = require('../models/reward_suggestion');

const RewardSuggestions = LvlCollection.extend({
  model: RewardSuggestion,
});

module.exports = Bookshelf.collection('RewardSuggestions', RewardSuggestions);
