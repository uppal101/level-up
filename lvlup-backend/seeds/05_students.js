exports.seed = function (knex, Promise) {
  return knex('students').del()
  .then(() => knex('students').insert([
    {
      id: 1,
      username: 'algorythmist',
      first_name: 'Thomas',
      last_name: 'Stang',
      email: 'stang.tk@gmail.com',
      github_user_name: 'tkstang',
      cohort_id: 1,
    },
    {
      id: 2,
      username: 'leveluppal',
      first_name: 'Sanjeet',
      last_name: 'Uppal',
      email: 'sanjeet.uppal92@gmail.com',
      github_user_name: 'uppal101',
      cohort_id: 1,
    },
    {
      id: 3,
      username: 'dan_m_g',
      first_name: 'Daniel',
      last_name: 'Gardner',
      email: 'daniel.marc.gardner@gmail.com',
      github_user_name: 'danielmarcgardner',
      cohort_id: 1,
    },
  ]));
};
