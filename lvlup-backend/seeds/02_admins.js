exports.seed = function (knex, Promise) {
  return knex('admins').del()
  .then(() => knex('admins').insert([
    {
      id: 1,
      username: 'jennyboo',
      first_name: 'Jenny',
      last_name: 'Engard',
      email: 'jenny.engard@galvanize.com',
      hashed_password: '$2a$06$s6LuQvVOqv7cdwo4KCwOmu28SnXWGcaqBpIXkM6iBZQLDBTMoI9Au',
      campus_id: 1,
    },
    {
      id: 2,
      username: 'tweetordie',
      first_name: 'Mary Ann',
      last_name: 'Barge',
      email: 'maryann.barge@galvanize.com',
      hashed_password: '$2a$06$s6LuQvVOqv7cdwo4KCwOmu28SnXWGcaqBpIXkM6iBZQLDBTMoI9Au',
      campus_id: 1,
    },
  ]));
};
