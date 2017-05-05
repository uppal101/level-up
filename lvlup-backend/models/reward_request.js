const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

require('./student');
require('./reward');
require('./category');

const RewardRequest = LvlModel.extend({
  tableName: 'reward_requests',
  hasTimestamps: true,

  student() {
    return this.belongsTo('Student');
  },
  reward() {
    return this.belongsTo('Reward');
  },
  category() {
    return this.belongsTo('Category');
  },
});

module.exports = Bookshelf.model('RewardRequest', RewardRequest);
