const Bookshelf = require('../bookshelf');
require('./student');
require('./reward');

const RewardRequest = Bookshelf.Model.extend({
  tableName: 'reward_requests',
  hasTimestamps: true,

  student: function() {
    return this.belongsTo('Student');
  },
  reward: function() {
    return this.belongsTo('Reward');
  },
});

module.exports = Bookshelf.model('RewardRequest', RewardRequest);
