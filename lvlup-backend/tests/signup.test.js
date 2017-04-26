process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const supertest = require('supertest');
const knex = require('../knex');
const app = require('../app');

beforeEach((done) => {
  knex.migrate.latest().then(() => {
    done();
  }).catch((err) => {
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

const signup = {
  name: 'Kevin Zheng',
  email: 'kvinzheng@gmail.com',
  github_user_name: 'kvinzheng',
  photo_url: 'http://www.github.com/kvinzheng',
  cohort_id: 1,
  username: 'kdaddy',
};

describe('POST /signup/students', (done) => {
  it('should respond with the newly registered information for the student', (done) => {
    supertest(app)
    .post('/signup/students/')
    .set('Accept', 'application/json')
    .send(signup)
    .expect((res) => {
      delete res.body.created_at;
      delete res.body.updated_at;
      delete res.body.cohort.updated_at;
      delete res.body.cohort.created_at;
    })
    .expect('Token', /token=[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+; Path=\/;.+HttpOnly/)
    .expect(200)
    .end((err, res) => {
      expect(res.body).to.deep.equal(
        {
          id: 4,
          name: 'Kevin Zheng',
          email: 'kvinzheng@gmail.com',
          github_user_name: 'kvinzheng',
          photo_url: 'http://www.github.com/kvinzheng',
          gravatar_url: null,
          cohort_id: 1,
          username: 'kdaddy',
          rewardRequests: [],
          challegeSubmissions: [],
          cohort: {
            id: 1,
            name: 'g42',
            type: 'WDI',
            q1_start_date: '2017-01-09T08:00:00.000Z',
            q2_start_date: '2017-02-21T08:00:00.000Z',
            q3_start_date: '2017-04-03T07:00:00.000Z',
            q4_start_date: '2017-05-15T07:00:00.000Z',
            graduation_date: '2017-06-23T07:00:00.000Z',
            campus_id: 1,
          },
        });
    });
    done();
  });
});
