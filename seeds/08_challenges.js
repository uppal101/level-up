exports.seed = (knex, Promise) => {
  knex('challenges').del()
  .then(() =>
    knex('challenges').insert([
      {
        id: 1,
        name: 'Office Hours',
        point_cost: 25,
        description: 'Hold office hours during lab time for a junior cohort(min. 1 hour)',
        campus_id: 1,
        category_id: 2,
      },
      {
        id: 2,
        name: 'Front-end side project',
        point_cost: 75,
        description: 'Develop a side project using curriculum technology',
        campus_id: 1,
        category_id: 1,
      },
      {
        id: 3,
        name: 'Backend side project',
        point_cost: 75,
        description: 'Develop a side project using curriculum technology',
        campus_id: 1,
        category_id: 1,
      },
      {
        id: 4,
        name: 'Fullstack side project',
        point_cost: 200,
        description: 'Develop a side project using curriculum technology',
        campus_id: 1,
        category_id: 1,
      },
      {
        id: 5,
        name: 'Publish article',
        point_cost: 75,
        description: 'Publish an original article on Medium with a minimum 750 word length',
        campus_id: 1,
        category_id: 3,
      },
    ]),
  );
};
