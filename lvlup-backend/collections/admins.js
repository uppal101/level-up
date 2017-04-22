const Bookshelf = require('../bookshelf');
const LvlCollection = require('./lvlCollection');
const Admin = require('../models/admin');

const Admins = LvlCollection.extend({
  model: Admin,
});

module.exports = Bookshelf.collection('Admins', Admins);
