const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

require('./challenge');
require('./reward');

const Category = LvlModel.extend({
  tableName: 'categories',
  hasTimestamps: true,

  challenges() {
    return this.hasMany('Challenge');
  },
  rewards() {
    return this.hasMany('Reward');
  },
});

module.exports = Bookshelf.model('Category', Category);
