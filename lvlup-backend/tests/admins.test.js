process.env.NODE_ENV = 'test';

const knex = require('../knex');
const supertest = require('supertest');
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

after(() => {
  knex.destroy();
});

describe('GET /admins/', () => {
  it('should respond with all admins', (done) => {
    supertest(app)
    .get('/api/admins/')
    .set('Accept', 'application/json')
    .expect(200, {
      admins: [
        {
          id: 1,
          username: 'jennyboo',
          name: 'Jenny Engard',
          email: 'jenny.engard@galvanize.com',
          gravatar_url: null,
          campus_id: 1,
        },
        {
          id: 2,
          username: 'tweetordie',
          name: 'Mary Ann Barge',
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
    .put('/api/admins/1')
    .set('Accept', 'application/json')
    .send({
      username: 'operajenny',
      name: 'Jenny Engard',
      email: 'jenny.engard@galvanize.com',
      gravatar_url: null,
      campus_id: 1,
    })
    .expect(200,
      { updatedAdmin:
      {
        username: 'operajenny',
        name: 'Jenny Engard',
        email: 'jenny.engard@galvanize.com',
        gravatar_url: null,
        id: 1,
        campus_id: 1,
      } }, done);
  });

  it('should respond with 400 when authorized user does not send any information', (done) => {
    supertest(app)
      .put('/api/admins/1')
      .set('Accept', 'application/json')
      .send({

      })
      .expect(400, JSON.stringify({
        code: 400,
        message: 'Please update a field',
      }, done));
  });
});

describe('DELETE /admins/:id', () => {
  it('should allow authorized user to delete a specific admin in the database', (done) => {
    supertest(app)
        .delete('/api/admins/1')
        .set('Accept', 'application/json')
        .expect(200, {
          message: 'Admin successfully deleted',
        }, done);
  });
  it('should respond with 404 if user enters incorrect parameter', (done) => {
    supertest(app)
          .delete('/api/cohorts/jenny')
          .set('Accept', 'Application/json')
          .expect(500, done);
  });
});
