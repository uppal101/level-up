const bookshelf = require('../bookshelf');

bookshelf.plugin('registry');
bookshelf.plugin('visibility');

const LvlCollection = bookshelf.Collection.extend({

});

module.exports = LvlCollection;
