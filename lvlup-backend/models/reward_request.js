const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

require('./student');
require('./reward');

const RewardRequest = LvlModel.extend({
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
