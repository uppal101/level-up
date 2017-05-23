process.env.NODE_ENV = 'test';

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

after(() => {
  knex.destroy();
});

describe('GET /admins/', () => {
  it('should respond with all admins', (done) => {
    supertest(app)
    .get('/api/admins/')
    .set('Cookie', 'authToken=adminToken')
    .set('Accept', 'application/json')
    .expect(200,
      [
        {
          id: 1,
          username: 'jennyboo',
          name: 'Jenny Engard',
          email: 'jenny.engard@galvanize.com',
          gravatar_url: null,
          campus_id: 1,
          confirmed: true,
        },
        {

          id: 2,
          username: 'CSM-Mary-Ann',
          name: 'Mary Ann Barge',
          confirmed: true,
          email: 'maryann.barge@galvanize.com',
          gravatar_url: null,
          campus_id: 1,
        },
      ], done);
  });
});

describe('PUT /admins/:id', () => {
  it('allows authorized user to update entire admin information', (done) => {
    supertest(app)
    .put('/api/admins/1')
    .set('Cookie', 'authToken=adminToken')
    .set('Accept', 'application/json')
    .send({
      username: 'operajenny',
      name: 'Jenny Engard',
      email: 'jenny.engard@galvanize.com',
      gravatar_url: null,
      campus_id: 1,
      confirmed: true,
    })
    .expect(200,
      { id: 1,
        username: 'operajenny',
        name: 'Jenny Engard',
        email: 'jenny.engard@galvanize.com',
        gravatar_url: null,
        campus_id: 1,
        confirmed: true,
      }, done);
  });

  it('should respond with 400 when authorized user does not send any information', (done) => {
    supertest(app)
      .put('/api/admins/1')
      .set('Cookie', 'authToken=adminToken')
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
      .set('Cookie', 'authToken=adminToken')
      .set('Accept', 'application/json')
      .expect(200, {
        message: 'Admin successfully deleted',
      }, done);
  });
  it('should respond with 500 if invalid parameter is given', (done) => {
    supertest(app)
      .delete('/api/cohorts/jenny')
      .set('Cookie', 'authToken=adminToken')
      .set('Accept', 'Application/json')
      .expect(500, done);
  });
});

describe('POST /admins/:id/cohorts', () => {
  it('should allow an admin to update their cohorts and return a new list of updated cohorts', (done) => {
    const newCohorts = {
      cohorts: [3, 4],
    };
    supertest(app)
      .post('/api/admins/1/cohorts')
      .set('Cookie', 'authToken=adminToken')
      .send(newCohorts)
      .expect(200, ['g42', 'g52', 'g53', 'g54'], done);
  });
});
