exports.seed = function (knex, Promise) {
  return knex('students').del()
  .then(() => knex('students').insert([
    {
      id: 1,
      username: 'algorythmist',
      name: 'Thomas Stang',
      email: 'stang.tk@gmail.com',
      github_user_name: 'tkstang',
      cohort_id: 1,
    },
    {
      id: 2,
      username: 'leveluppal',
      name: 'Sanjeet Uppal',
      email: 'sanjeet.uppal92@gmail.com',
      github_user_name: 'uppal101',
      cohort_id: 1,
    },
    {
      id: 3,
      username: 'dan_m_g',
      name: 'Daniel Gardner',
      email: 'daniel.marc.gardner@gmail.com',
      github_user_name: 'danielmarcgardner',
      cohort_id: 1,
      photo_url: 'https://avatars2.githubusercontent.com/u/22782154?v=3',
    },
  ]))
    .then(() => knex.raw('SELECT setval(\'students_id_seq\', (SELECT MAX(id) FROM students))'));
};
