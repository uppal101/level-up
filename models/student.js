const Bookshelf = require('../bookshelf');
require('./cohort');
require('./point');
require('./reward_suggestion');

const Student = Bookshelf.Model.extend({
  tableName: 'students',
  hasTimestamps: true,

  cohort: function() {
    return this.belongsTo('Cohort');
  },
  points: function() {
    return this.hasMany('Point');
  },
  reward_suggestion_students: function() {
    return this.belongsToMany('RewardSuggestions').through('RewardSuggestionStudent');
  }

});

module.exports = Bookshelf.model('Student', Student);
