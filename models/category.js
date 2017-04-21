const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');
const LvlCollection = require('./lvlCollection');
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

const Categories = LvlCollection.extend({
  model: Category,
});

module.exports = {
  Category: Bookshelf.model('Category', Category),
  Categories: Bookshelf.collection('Categories', Categories),
};
