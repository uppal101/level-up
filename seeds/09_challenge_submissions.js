
exports.seed = function (knex, Promise) {
  return knex('challenge_submissions').del()
  .then(() => knex('challenge_submissions').insert([
    {
      id: 1,
      student_id: 1,
      challenge_id: 4,
      point_cost: 200,
      submission_message: 'Built an app that allows users to add their jacket size. It also tracks fulfillment status us to whether student has received their gSwag.',
      submission_status: 'Pending approval',
      campus_id: 1,
      category_id: 2,
    },
    {
      id: 2,
      student_id: 3,
      challenge_id: 4,
      point_cost: 200,
      submission_message: 'Built an app that allows users to add their jacket size. It also tracks fulfillment status us to whether student has received their gSwag.',
      submission_status: 'Pending approval',
      campus_id: 1,
      category_id: 2,
    },
    {
      id: 3,
      student_id: 2,
      challenge_id: 1,
      point_cost: 25,
      submission_message: 'Held one hour of office hours on May 16th',
      submission_status: 'Pending approval',
      campus_id: 1,
      category_id: 2,
    },
  ]));
};
