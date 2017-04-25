process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const supertest = require('supertest');
const knex = require('../knex');
const app = require('../app');

beforeEach((done) => {
  knex.migrate.latest()
  .then(() => knex.seed.run())
  .then(() => {
    done();
  })
  .catch((err) => {
    done(err);
  });
});

afterEach((done) => {
  knex.migrate.rollback()
  .then(() => done())
  .catch((err) => {
    done(err);
  });
});

describe('GET /admins/', () => {
  it('should respond with all admins', (done) => {
    supertest(app)
    .get('/admins/')
    .set('Accept', 'application/json')
    .expect((admins) => {
      delete admins.body.id;
      delete admins.body.hashed_password;
      delete admins.body.created_at;
      delete admins.body.updated_at;
    })
    .expect(200, {
      allAdmins: [
        {
          username: 'jennyboo',
          first_name: 'Jenny',
          last_name: 'Engard',
          email: 'jenny.engard@galvanize.com',
          gravatar_url: null,
          campus_id: 1,
        },
        {
          username: 'tweetordie',
          first_name: 'Mary Ann',
          last_name: 'Barge',
          email: 'maryann.barge@galvanize.com',
          gravatar_url: null,
          campus_id: 1,
        },
      ],
    }, done);
  });
});
