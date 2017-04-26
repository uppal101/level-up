exports.seed = function (knex, Promise) {
  return knex('cohorts').del()
  .then(() => knex('cohorts').insert([
    {
      id: 1,
      name: 'g42',
      type: 'WDI',
      q1_start_date: '2017-01-09',
      q2_start_date: '2017-02-21',
      q3_start_date: '2017-04-03',
      q4_start_date: '2017-05-15',
      graduation_date: '2017-06-23',
      campus_id: 1,
    },
    {
      id: 2,
      name: 'g52',
      type: 'WDI',
      q1_start_date: '2017-04-17',
      q2_start_date: '2017-5-29',
      q3_start_date: '2017-07-10',
      q4_start_date: '2017-08-21',
      graduation_date: '2017-09-29',
      campus_id: 1,
    },
    {
      id: 3,
      name: 'g53',
      type: 'WDI',
      q1_start_date: '2017-04-17',
      q2_start_date: '2017-5-29',
      q3_start_date: '2017-07-10',
      q4_start_date: '2017-08-21',
      graduation_date: '2017-09-29',
      campus_id: 2,
    },
  ]))
    .then(() => knex.raw('SELECT setval(\'cohorts_id_seq\', (SELECT MAX(id) FROM cohorts))'));
};
