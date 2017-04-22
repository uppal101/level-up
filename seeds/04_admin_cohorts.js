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
  ]));
};
