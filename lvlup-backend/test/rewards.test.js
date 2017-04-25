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

describe('POST /rewards/', () => {
  it('allows authorized user to add a reward in the database', (done) => {
    supertest(app)
    .post('/api/rewards/')
    .set('Accept', 'application/json')
    .send({
      name: 'Who said there is not such a thing as free lunch',
      point_cost: 75,
      description: 'Free individual lunch $15 limit',
      campus_id: 1,
      category_id: 4,
    })
    .expect((cohort) => {
      delete cohort.body.created_at;
      delete cohort.body.updated_at;
    })
    .expect(200,
      {
        id: 9,
        name: 'Gift Card to Gather',
        point_cost: 75,
        description: '$100 gift card to the Gather cafe.',
        campus_id: 1,
        category_id: 4,
      }, done);
  });
  it('should respond with 400 when authorized user does not send complete information', (done) => {
    supertest(app)
      .post('/api/rewards/')
      .set('Accept', 'application/json')
      .send({
        name: 'g53',
        type: 'WDI',
        q1_start_date: '2017-04-17',
        q2_start_date: '2017-5-29',
        q3_start_date: '2017-07-10',
        q4_start_date: '2017-08-21',
        campus: 'New York',
      })
      .expect((cohort) => {
        delete cohort.body.created_at;
        delete cohort.body.updated_at;
      })
      .expect(400, JSON.stringify({
        code: 400,
        message: 'Please enter all fields',
      }, done));
  });
});
