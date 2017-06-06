process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
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

const login = {
  email: 'jenny.engard@galvanize.com',
  password: 'galvanize',
};

const noAccount = {
  email: 'hamid.aghdaee@galvanize.com',
  password: 'galvanize',
};

const badPass = {
  email: 'jenny.engard@galvanize.com',
  password: 'glvanize',
};

const badEmail = {
  email: 'jenny.engard@glvanize.com',
  password: 'galvanize',
};

const newUser = {
  username: 'ketohacker',
  name: 'Hamid Aghdaee',
  email: 'hamid.aghdaee@galvanize.com',
  cohorts: [1, 2],
  campus_id: 1,
  password: 'galvanize',
};

describe('User Log In and Sign Ups', (done) => {
  it('Should log an admin successfully with their information and token', (done) => {
    supertest(app)
    .post('/api/admin/login')
    .set('Accept', 'application/json')
    .send(login)
    .expect((res) => {
      delete res.body.created_at;
      delete res.body.updated_at;
      delete res.body.cohorts[0].created_at;
      delete res.body.cohorts[0].updated_at;
      delete res.body.cohorts[1].created_at;
      delete res.body.cohorts[1].updated_at;
      delete res.body.cohorts[0]._pivot_id;
      delete res.body.cohorts[0]._pivot_admin_id;
      delete res.body.cohorts[1]._pivot_admin_id;
      delete res.body.cohorts[1]._pivot_id;
      delete res.body.cohorts[0]._pivot_cohort_id;
      delete res.body.cohorts[1]._pivot_cohort_id;
      delete res.body.cohorts[0].campus.created_at;
      delete res.body.cohorts[1].campus.created_at;
      delete res.body.cohorts[0].campus.updated_at;
      delete res.body.cohorts[1].campus.updated_at;
    })
    // .expect('set-cookie', /authToken=[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+; Path=\/;.+HttpOnly/)
    .expect(200,
      {
        id: 1,
        username: 'jennyboo',
        name: 'Jenny Engard',
        email: 'jenny.engard@galvanize.com',
        campus_id: 1,
        gravatar_url: null,
        confirmed: true,
        cohorts: [{
          id: 1,
          name: 'g42',
          type: 'WDI',
          q1_start_date: '2017-01-09T08:00:00.000Z',
          q2_start_date: '2017-02-21T08:00:00.000Z',
          q3_start_date: '2017-04-03T07:00:00.000Z',
          q4_start_date: '2017-05-15T07:00:00.000Z',
          graduation_date: '2017-06-23T07:00:00.000Z',
          campus_id: 1,
          campus: {
            id: 1,
            location: 'San Francisco',
          },
        }, {
          id: 2,
          name: 'g52',
          type: 'WDI',
          q1_start_date: '2017-04-17T07:00:00.000Z',
          q2_start_date: '2017-05-29T07:00:00.000Z',
          q3_start_date: '2017-07-10T07:00:00.000Z',
          q4_start_date: '2017-08-21T07:00:00.000Z',
          graduation_date: '2017-09-29T07:00:00.000Z',
          campus_id: 1,
          campus: {
            id: 1,
            location: 'San Francisco',
          },
        }],
      }, done);
  });

  it('Should send an error message if a user is not signed up and tries to log in', (done) => {
    supertest(app)
    .post('/api/admin/login')
    .set('Accept', 'application/json')
    .send(noAccount)
    .expect(400, JSON.stringify('Invalid password or username'), done);
  });

  it('Should send an error message if a user enters a bad password', (done) => {
    supertest(app)
    .post('/api/admin/login')
    .set('Accept', 'application/json')
    .send(badPass)
    .expect(400, JSON.stringify('Invalid password or username'), done);
  });

  it('Should send an error message if a user enters a bad email', (done) => {
    supertest(app)
    .post('/api/admin/login')
    .set('Accept', 'application/json')
    .send(badEmail)
    .expect(400, JSON.stringify('Invalid password or username'), done);
  });

  it('Should sign up an admin successfully with their information and give an access token', (done) => {
    supertest(app)
    .post('/api/admin/signup')
    .set('Accept', 'application/json')
    .send(newUser)
    .expect((res) => {
      delete res.body.cohorts[0].created_at;
      delete res.body.cohorts[0].updated_at;
      delete res.body.cohorts[1].created_at;
      delete res.body.cohorts[1].updated_at;
      delete res.body.cohorts[0]._pivot_id;
      delete res.body.cohorts[0]._pivot_admin_id;
      delete res.body.cohorts[1]._pivot_admin_id;
      delete res.body.cohorts[1]._pivot_id;
      delete res.body.cohorts[0]._pivot_cohort_id;
      delete res.body.cohorts[1]._pivot_cohort_id;
      delete res.body.cohorts[0].campus.created_at;
      delete res.body.cohorts[1].campus.created_at;
      delete res.body.cohorts[0].campus.updated_at;
      delete res.body.cohorts[1].campus.updated_at;
    })
    // .expect('set-cookie', /token=[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+; Path=\/;.+HttpOnly/)
    .expect(200,
      {
        id: 3,
        username: 'ketohacker',
        name: 'Hamid Aghdaee',
        email: 'hamid.aghdaee@galvanize.com',
        gravatar_url: null,
        campus_id: 1,
        confirmed: false,
        cohorts: [{
          id: 1,
          name: 'g42',
          type: 'WDI',
          q1_start_date: '2017-01-09T08:00:00.000Z',
          q2_start_date: '2017-02-21T08:00:00.000Z',
          q3_start_date: '2017-04-03T07:00:00.000Z',
          q4_start_date: '2017-05-15T07:00:00.000Z',
          graduation_date: '2017-06-23T07:00:00.000Z',
          campus_id: 1,
          campus: {
            id: 1,
            location: 'San Francisco',
          },
        }, {
          id: 2,
          name: 'g52',
          type: 'WDI',
          q1_start_date: '2017-04-17T07:00:00.000Z',
          q2_start_date: '2017-05-29T07:00:00.000Z',
          q3_start_date: '2017-07-10T07:00:00.000Z',
          q4_start_date: '2017-08-21T07:00:00.000Z',
          graduation_date: '2017-09-29T07:00:00.000Z',
          campus_id: 1,
          campus: {
            id: 1,
            location: 'San Francisco',
          },
        }],
      }, done);
  });
  it('Should send an error message if a user is already signed up', (done) => {
    const newUser = {
      username: 'ketohacker',
      name: 'Hamid Aghdaee',
      email: 'hamid.aghdaee@galvanize.com',
      cohorts: [1, 2],
      campus_id: 1,
      password: 'galvanize',
    };
    supertest(app)
    .post('/api/admin/signup')
    .set('Accept', 'application/json')
    .send(login)
    // .expect('set-cookie', /token=[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+; Path=\/;.+HttpOnly/)
    .expect(400, { error: 'User already exists' }, done);
  });
});
