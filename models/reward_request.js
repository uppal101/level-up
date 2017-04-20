const Bookshelf = require('../bookshelf');
require('./student');
require('./reward');

const RewardRequest = Bookshelf.Model.extend({
  tableName: 'reward_requests',
  hasTimestamps: true,

  student() {
    return this.belongsTo('Student');
  },
  reward() {
    return this.belongsTo('Reward');
  },
});

module.exports = Bookshelf.model('RewardRequest', RewardRequest);
