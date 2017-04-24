const Bookshelf = require('../bookshelf');
const LvlCollection = require('./lvlCollection');
const Category = require('../models/category');

const Categories = LvlCollection.extend({
  model: Category,
});

module.exports = Bookshelf.collection('Categories', Categories);
