
exports.seed = function (knex, Promise) {
  return knex('reward_requests').del()
  .then(() => knex('reward_requests').insert([
    {
      id: 1,
      student_id: 2,
      reward_id: 6,
      status: 'Pending approval',
      fulfilled: false,
    },
    {
      id: 2,      
      student_id: 1,
      reward_id: 7,
      status: 'Pending approval',
      fulfilled: false,
    },
    {
      id: 3,
      student_id: 3,
      reward_id: 8,
      status: 'Pending approval',
      fulfilled: false,
    },
  ]));
};
