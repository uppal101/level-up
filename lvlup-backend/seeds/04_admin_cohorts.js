exports.seed = function (knex, Promise) {
  return knex('admin_cohorts').del()
  .then(() => knex('admin_cohorts').insert([
    {
      id: 1,
      admin_id: 1,
      cohort_id: 1,
    },
    {
      id: 2,
      admin_id: 1,
      cohort_id: 2,
    },
    {
      id: 3,
      admin_id: 2,
      cohort_id: 1,
    },
    {
      id: 4,
      admin_id: 2,
      cohort_id: 2,
    },
  ]))
  .then(() => knex.raw('SELECT setval(\'admin_cohorts_id_seq\', (SELECT MAX(id) FROM admin_cohorts))'));
};
