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

describe('PUT /admins/:id', () => {
  it('allows authorized user to update entire admin information', (done) => {
    supertest(app)
    .post('/admins/1')
    .set('Accept', 'application/json')
    .send({
      username: 'operajenny',
      first_name: 'Jenny',
      last_name: 'Engard',
      email: 'jenny.engard@galvanize.com',
      gravatar_url: null,
      campus_id: 1,
    })
    .expect((admin) => {
      delete admin.body.created_at;
      delete admin.body.updated_at;
    })
    .expect(200,
      { updatedAdmin:
      {
        username: 'operajenny',
        first_name: 'Jenny',
        last_name: 'Engard',
        email: 'jenny.engard@galvanize.com',
        gravatar_url: null,
        campus_id: 1,
      } }, done);
  });

  it('should respond with 400 when authorized user does not send any information', (done) => {
    supertest(app)
      .post('/admin/1')
      .set('Accept', 'application/json')
      .send({

      })
      .expect((admin) => {
        delete admin.body.created_at;
        delete admin.body.updated_at;
      })
      .expect(400, JSON.stringify({
        code: 400,
        message: 'Please update a field',
      }, done));
  });
});
