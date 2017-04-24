
exports.seed = function (knex, Promise) {
  return knex('reward_suggestions').del()
  .then(() => knex('reward_suggestions').insert([
    {
      id: 1,
      title: 'Custom 2 hour intro lecture to a new technology',
      description: 'Have an instructor provide an introductory to a lecture on a new technology not covered in class.',
      votes: 3,
      category_id: 1,
    },
    {
      id: 2,
      title: '15 minute whiteboarding session',
      description: 'With an instructor of your choice have a 15 minute whiteboarding session.',
      votes: 2,
      category_id: 1,
    },
  ]))
  .then(() => knex.raw('SELECT setval(\'reward_suggestions_id_seq\', (SELECT MAX(id) FROM reward_suggestions))'));
};
