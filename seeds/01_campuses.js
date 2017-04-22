exports.seed = (knex, Promise) => {
  knex('campuses').del()
  .then(() =>
    knex('campuses').insert([
      {
        id: 1,
        location: 'San Francisco',
      },
      {
        id: 2,
        location: 'Austin',
      },
      {
        id: 3,
        location: 'Boulder',
      },
      {
        id: 4,
        location: 'Denver-Platte',
      },
      {
        id: 5,
        location: 'Denver-Golden Triangle',
      },
      {
        id: 6,
        location: 'New York',
      },
      {
        id: 7,
        location: 'Phoenix',
      },
      {
        id: 8,
        location: 'Seattle',
      },
      {
        id: 9,
        location: 'All Campuses',
      },
    ]),
  );
};
