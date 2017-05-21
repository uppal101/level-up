exports.seed = function (knex, Promise) {
  return knex('admins').del()
  .then(() => knex('admins').insert([
    {
      id: 1,
      username: 'jennyboo',
      name: 'Jenny Engard',
      email: 'jenny.engard@galvanize.com',
      hashed_password: '$2a$04$kQf8f8uARgwB1zjHkoDwjOsxyglqS38c4yi.ViFcHR59g.CLvk8Ma',
      campus_id: 1,
      confirmed: true,
    },
    {
      id: 2,
      username: 'CSM-Mary-Ann',
      name: 'Mary Ann Barge',
      email: 'maryann.barge@galvanize.com',
      hashed_password: '$2a$04$kQf8f8uARgwB1zjHkoDwjOsxyglqS38c4yi.ViFcHR59g.CLvk8Ma',
      campus_id: 1,
      confirmed: true,
    },
  ]))
  .then(() => knex.raw('SELECT setval(\'admins_id_seq\', (SELECT MAX(id) FROM admins))'));
};
