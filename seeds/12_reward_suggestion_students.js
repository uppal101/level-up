
exports.seed = function (knex, Promise) {
  return knex('reward_suggestion_students').del()
  .then(() => knex('reward_suggestion_students').insert([
    {
      id: 1,
      reward_suggestion_id: 1,
      voters: 1,
    },
    {
      id: 2,
      reward_suggestion_id: 1,
      voters: 2,
    },
    {
      id: 3,
      reward_suggestion_id: 1,
      voters: 3,
    },
    {
      id: 4,
      reward_suggestion_id: 2,
      voters: 1,
    },
    {
      id: 5,
      reward_suggestion_id: 2,
      voters: 2,
    },
  ]));
};
