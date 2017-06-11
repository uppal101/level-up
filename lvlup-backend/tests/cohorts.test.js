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

describe('GET /cohorts/', () => {
  it('should respond with all cohorts across all campuses', (done) => {
    supertest(app)
    .get('/api/cohorts/')
    .set('Accept', 'application/json')
    .expect(cohorts => cohorts.body.forEach((cohort) => {
      delete cohort.created_at;
      delete cohort.updated_at;
    }))
    .expect(200, [{ id: 1,
      name: 'g42',
      type: 'WDI',
      q1_start_date: '2017-01-09T08:00:00.000Z',
      q2_start_date: '2017-02-21T08:00:00.000Z',
      q3_start_date: '2017-04-03T07:00:00.000Z',
      q4_start_date: '2017-05-15T07:00:00.000Z',
      graduation_date: '2017-06-23T07:00:00.000Z',
      campus_id: 1 },
    { id: 2,
      name: 'g52',
      type: 'WDI',
      q1_start_date: '2017-04-17T07:00:00.000Z',
      q2_start_date: '2017-05-29T07:00:00.000Z',
      q3_start_date: '2017-07-10T07:00:00.000Z',
      q4_start_date: '2017-08-21T07:00:00.000Z',
      graduation_date: '2017-09-29T07:00:00.000Z',
      campus_id: 1 },
    { id: 3,
      name: 'g53',
      type: 'WDI',
      q1_start_date: '2017-04-17T07:00:00.000Z',
      q2_start_date: '2017-05-29T07:00:00.000Z',
      q3_start_date: '2017-07-10T07:00:00.000Z',
      q4_start_date: '2017-08-21T07:00:00.000Z',
      graduation_date: '2017-09-29T07:00:00.000Z',
      campus_id: 2 },
    { id: 4,
      name: 'g54',
      type: 'WDI',
      q1_start_date: '2017-04-17T07:00:00.000Z',
      q2_start_date: '2017-05-29T07:00:00.000Z',
      q3_start_date: '2017-07-10T07:00:00.000Z',
      q4_start_date: '2017-08-21T07:00:00.000Z',
      graduation_date: '2017-09-29T07:00:00.000Z',
      campus_id: 3 },
    { id: 5,
      name: 'g55',
      type: 'WDI',
      q1_start_date: '2017-04-17T07:00:00.000Z',
      q2_start_date: '2017-05-29T07:00:00.000Z',
      q3_start_date: '2017-07-10T07:00:00.000Z',
      q4_start_date: '2017-08-21T07:00:00.000Z',
      graduation_date: '2017-09-29T07:00:00.000Z',
      campus_id: 4 }], done);
  });
});

describe('POST /cohorts/', () => {
  it('allows authorized user to add a cohort in the database', (done) => {
    supertest(app)
    .post('/api/cohorts/')
    .set('Accept', 'application/json')
    .set('Cookie', 'authToken=adminToken')
    .send({
      name: 'g100',
      type: 'WDI',
      q1_start_date: '2017-04-17',
      q2_start_date: '2017-5-29',
      q3_start_date: '2017-07-10',
      q4_start_date: '2017-08-21',
      graduation_date: '2017-09-29',
      campuses: 6,
    })
    .expect((cohort) => {
      delete cohort.body.created_at;
      delete cohort.body.updated_at;
    })
    .expect(200,
      { name: 'g100',
        type: 'WDI',
        q1_start_date: '2017-04-17',
        q2_start_date: '2017-5-29',
        q3_start_date: '2017-07-10',
        q4_start_date: '2017-08-21',
        graduation_date: '2017-09-29',
        campus_id: 6,
        id: 6 }, done);
  });
  it('should respond with 400 when authorized user does not send complete information', (done) => {
    supertest(app)
      .post('/api/cohorts/')
      .set('Accept', 'application/json')
      .set('Cookie', 'authToken=adminToken')
      .send({
        name: 'g53',
        type: 'WDI',
        q1_start_date: '2017-04-17',
        q2_start_date: '2017-5-29',
        q3_start_date: '2017-07-10',
        q4_start_date: '2017-08-21',
        campus: 'New York',
      })
      .expect(400, JSON.stringify({
        code: 400,
        message: 'Please enter all fields',
      }, done));
  });
});

describe('GET /cohorts/:id', () => {
  it('should respond with the specified cohort of the id requested', (done) => {
    supertest(app)
      .get('/api/cohorts/1')
      .set('Accept', 'application/json')
      .expect((cohort) => {
        delete cohort.body.created_at;
        delete cohort.body.updated_at;
      })
      .expect(200,
      {
        id: 1,
        name: 'g42',
        type: 'WDI',
        q1_start_date: '2017-01-09T08:00:00.000Z',
        q2_start_date: '2017-02-21T08:00:00.000Z',
        q3_start_date: '2017-04-03T07:00:00.000Z',
        q4_start_date: '2017-05-15T07:00:00.000Z',
        graduation_date: '2017-06-23T07:00:00.000Z',
        campus_id: 1,
      }, done);
  });
  it('should respond with 404 if user enters incorrect parameter', (done) => {
    supertest(app)
        .get('/api/cohorts/g42')
        .set('Accept', 'Application/json')
        .expect(404, JSON.stringify({ code: 404, message: 'Please enter valid information' }, done));
  });
});

describe('DELETE /cohorts/:id', () => {
  it('should allow authorized user to delete a specific cohort in the database', (done) => {
    supertest(app)
        .delete('/api/cohorts/1')
        .set('Cookie', 'authToken=adminToken')
        .set('Accept', 'application/json')
        .expect(200,
      {
        message: 'Cohort successfully deleted',
      }, done);
  });
  it('should respond with 500 if invalid parameter is given', (done) => {
    supertest(app)
          .delete('/api/cohorts/g42')
          .set('Accept', 'Application/json')
          .set('Cookie', 'authToken=adminToken')
          .expect(500, done);
  });
});

describe('GET /cohorts/campuses/:campus_id', () => {
  it('should respond with all cohorts at a specified campus', (done) => {
    supertest(app)
          .get('/api/cohorts/campuses/2')
          .set('Accept', 'application/json')
          .expect((cohort) => {
            delete cohort.body[0].created_at;
            delete cohort.body[0].updated_at;
          })
          .expect(200, [{ id: 3,
            name: 'g53',
            type: 'WDI',
            q1_start_date: '2017-04-17T07:00:00.000Z',
            q2_start_date: '2017-05-29T07:00:00.000Z',
            q3_start_date: '2017-07-10T07:00:00.000Z',
            q4_start_date: '2017-08-21T07:00:00.000Z',
            graduation_date: '2017-09-29T07:00:00.000Z',
            campus_id: 2,
          }], done);
  });
  it('should respond with 404 if user enters incorrect parameter', (done) => {
    supertest(app)
            .get('/api/cohorts/campuses/g53')
            .set('Accept', 'Application/json')
            .expect(404, JSON.stringify({ code: 404, message: 'Please enter valid information' }, done));
  });
});
