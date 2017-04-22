exports.seed = function (knex, Promise) {
  return knex('categories').del()
  .then(() => knex('categories').insert([
    {
      id: 1,
      category: 'Education',
    },
    {
      id: 2,
      category: 'Community',
    },
    {
      id: 3,
      category: 'Career',
    },
    {
      id: 4,
      category: 'Life',
    },
  ]));
};
