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

after(() => {
  knex.destroy();
});

describe('POST /rewards/', () => {
  it('allows authorized user to add a reward in the database', (done) => {
    supertest(app)
    .post('/api/rewards/')
    .set('Cookie', 'authToken=adminToken')
    .set('Accept', 'application/json')
    .send({
      name: 'Who said there is not such a thing as free lunch',
      point_cost: 75,
      description: 'Free individual lunch $15 limit',
      campus_id: 1,
      category_id: 4,
      active: 'Active',
    })
    .expect((reward) => {
      delete reward.body.created_at;
      delete reward.body.updated_at;
    })
    .expect(200, {
      id: 22,
      name: 'Who said there is not such a thing as free lunch',
      point_cost: 75,
      description: 'Free individual lunch $15 limit',
      campus_id: 1,
      category_id: 4,
      active: 'Active',
    }, done);
  });
  it('should respond with 400 when authorized user does not send complete information', (done) => {
    supertest(app)
      .post('/api/rewards/')
      .set('Accept', 'application/json')
      .send({
        name: 'Who said there is not such a thing as free lunch',
        point_cost: 75,
        description: 'Free individual lunch $15 limit',
        campus_id: 1,
        active: 'Active',
      })
      .expect(400, JSON.stringify({
        code: 400,
        message: 'Please enter all fields',
      }, done));
  });
});

describe('GET /rewards/:id', () => {
  it('should respond with the specified reward of the id requested', (done) => {
    supertest(app)
      .get('/api/rewards/1')
      .set('Accept', 'application/json')
      .set('Cookie', 'authToken=adminToken')
      .expect((reward) => {
        delete reward.body.created_at;
        delete reward.body.updated_at;
      })
      .expect(200,
      {
        id: 1,
        name: 'Gift Card to Gather',
        point_cost: 25,
        description: '$5 gift card to the Gather cafe. Limit one per student.',
        campus_id: 1,
        category_id: 4,
        active: 'Active',
      }, done);
  });
  it('should respond with 404 if user enters incorrect parameter', (done) => {
    supertest(app)
        .get('/api/rewards/giftcard')
        .set('Accept', 'Application/json')
        .expect(404, JSON.stringify({ code: 404, message: 'Please enter valid information' }, done));
  });
});

describe('PUT /rewards/:id', () => {
  it('allows authorized user to update a reward', (done) => {
    supertest(app)
    .put('/api/rewards/1')
    .set('Cookie', 'authToken=adminToken')
    .set('Accept', 'application/json')
    .send({
      name: 'Gift Card to Gather',
      point_cost: 30,
      description: '$5 gift card to the Gather cafe.',
      campus_id: 1,
      category_id: 4,
      active: 'Active',
    })
    .expect((reward) => {
      delete reward.body.created_at;
      delete reward.body.updated_at;
    })
    .expect(200,
      {
        id: 1,
        name: 'Gift Card to Gather',
        point_cost: 30,
        description: '$5 gift card to the Gather cafe.',
        campus_id: 1,
        category_id: 4,
        active: 'Active',
      }, done);
  });

  it('should respond with 400 when authorized user does not send any information', (done) => {
    supertest(app)
      .put('/api/rewards/1')
      .set('Accept', 'application/json')
      .send({

      })
      .expect(400, JSON.stringify({
        code: 400,
        message: 'Please update a field',
      }, done));
  });
});
