exports.seed = function (knex, Promise) {
  return knex('challenges').del()
  .then(() => knex('challenges').insert([
    {
      id: 1,
      name: 'Hold TA Hours',
      point_value: 25,
      description: 'Hold TA hours for a junior cohort (1 hour increments) during lab time or directly following conclusion of class hours (5-6pm).',
      campus_id: 1,
      category_id: 2,
    },
    {
      id: 2,
      name: 'Front-end Side Project',
      point_value: 75,
      description: 'Develop a side project using curriculum technology.',
      campus_id: 1,
      category_id: 1,
    },
    {
      id: 3,
      name: 'Back-end Side Project',
      point_value: 75,
      description: 'Develop a side project using curriculum technology.',
      campus_id: 1,
      category_id: 1,
    },
    {
      id: 4,
      name: 'Full-stack Side Project',
      point_value: 200,
      description: 'Develop a side project using curriculum technology.',
      campus_id: 1,
      category_id: 1,
    },
    {
      id: 5,
      name: 'Publish Article',
      point_value: 75,
      description: 'Publish an original article on Medium with a minimum 750 word length.',
      campus_id: 9,
      category_id: 3,
    },
  ]))
  .then(() => knex.raw('SELECT setval(\'challenges_id_seq\', (SELECT MAX(id) FROM challenges))'));
};
