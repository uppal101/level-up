process.env.NODE_ENV = 'test';

const app = require('../app');
const supertest = require('supertest');
const knex = require('../knex');

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

describe('GET challenges/campuses/:campus_id', () => {
  it('responds with 401 status if user is not logged in', (done) => {
    supertest(app)
    .get('/api/challenges/campuses/1')
    .expect('Content-Type', /plain/)
    .expect(401, 'You must be logged in', done);
  });
  it('responds with JSON', (done) => {
    supertest(app)
    .get('/api/challenges/campuses/1')
    .set('Cookie', 'authToken=adminToken')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
  it('responds with all challenges in the database', (done) => {
    supertest(app)
    .get('/api/challenges/campuses/1')
    .set('Cookie', 'authToken=adminToken')
    .set('Accept', 'application/json')
    .expect(challenges => challenges.body.forEach((challenge) => {
      delete challenge.created_at;
      delete challenge.updated_at;
    }))
    .expect(200, [
      {
        id: 1,
        name: 'Hold TA Hours',
        point_value: 25,
        description: 'Hold TA hours for a junior cohort (1 hour increments).',
        campus_id: 1,
        category_id: 2,
        requirements_1: 'Hold hours between 5pm and 6pm or during lab time',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        category: {
          id: 2,
          category: 'Community',
        },
      },
      {
        id: 2,
        name: 'Front-end Side Project',
        point_value: 75,
        description: 'Develop a side project using curriculum technology.',
        campus_id: 1,
        category_id: 1,
        requirements_1: 'Use HTML, CSS, JS, React, or Angular',
        requirements_2: 'Use an outside API',
        requirements_3: 'Must be approved by an instructor',
        requirements_4: null,
        requirements_5: null,
        category: {
          id: 1,
          category: 'Education',
        },
      },
      {
        id: 3,
        name: 'Back-end Side Project',
        point_value: 75,
        description: 'Develop a side project using curriculum technology.',
        campus_id: 1,
        category_id: 1,
        requirements_1: 'Build a backend server using Node, Express, Postgres, and Knex',
        requirements_2: 'Use an outside API',
        requirements_3: 'Must be approved by an instructor',
        requirements_4: null,
        requirements_5: null,
        category: {
          id: 1,
          category: 'Education',
        },
      },
      {
        id: 4,
        name: 'Full-stack Side Project',
        point_value: 200,
        description: 'Develop a side project using curriculum technology.',
        campus_id: 1,
        category_id: 1,
        requirements_1: 'Use HTML, CSS, JS, React, or Angular',
        requirements_2: 'Build a backend server using Node, Express, Postgres, and Knex',
        requirements_3: 'Use an outside API',
        requirements_4: 'Must be approved by an instructor',
        requirements_5: null,
        category: {
          id: 1,
          category: 'Education',
        },
      },
      {
        id: 5,
        name: 'Publish Article',
        point_value: 75,
        description: 'Publish an original article with a minimum 750 word length.',
        campus_id: 1,
        category_id: 3,
        requirements_1: 'Article published to Medium or LinkedIn',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        category: {
          id: 3,
          category: 'Career',
        },
      },
      {
        id: 6,
        name: 'Feed the Hamid',
        point_value: 10,
        description: 'Feed your favorite evil instructor.',
        campus_id: 1,
        category_id: 4,
        requirements_1: null,
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        category: {
          id: 4,
          category: 'Life',
        },
      },
    ], done);
  });
});

describe('POST challenges', () => {
  it('responds with 401 status if user is not an admin', (done) => {
    supertest(app)
    .post('/api/challenges')
    .expect(401, done);
  });
  it('responds with JSON if user is an admin', (done) => {
    supertest(app)
    .post('/api/challenges')
    .set('Cookie', 'authToken=adminToken')
    .send({
      name: 'Kiss ass',
      point_value: 0,
      description: 'Suck up to your favorite instructor.',
      campus_id: 1,
      category_id: 4,
      requirements_1: 'Instructor must smile',
      requirements_2: null,
      requirements_3: null,
      requirements_4: null,
      requirements_5: null,
    })
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
  it('allows admins to add a challenge to the database', (done) => {
    supertest(app)
    .post('/api/challenges/')
    .set('Cookie', 'authToken=adminToken')
    .set('Accept', 'application/json')
    .send({
      name: 'Kiss ass',
      point_value: 0,
      description: 'Suck up to your favorite instructor.',
      campus_id: 1,
      category_id: 4,
      requirements_1: 'Instructor must smile',
      requirements_2: null,
      requirements_3: null,
      requirements_4: null,
      requirements_5: null,
    })
    .expect((challenge) => {
      delete challenge.body.created_at;
      delete challenge.body.updated_at;
    })
    .expect(200, {
      id: 7,
      name: 'Kiss ass',
      point_value: 0,
      description: 'Suck up to your favorite instructor.',
      campus_id: 1,
      category_id: 4,
      requirements_1: 'Instructor must smile',
      requirements_2: null,
      requirements_3: null,
      requirements_4: null,
      requirements_5: null,
    }, done);
  });
});

describe('PUT challenges/:challenge_id', () => {
  it('responds with 401 status if user is not an admin', (done) => {
    supertest(app)
    .put('/api/challenges/4')
    .expect(401, done);
  });
  it('responds with JSON if user is an admin', (done) => {
    supertest(app)
    .put('/api/challenges/4')
    .set('Cookie', 'authToken=adminToken')
    .send({
      id: 4,
      name: 'Full-stack Side Project',
      point_value: 250,
      description: 'Develop a side project using curriculum technology.',
      campus_id: 1,
      category_id: 1,
      requirements_1: 'Must implement a front end',
      requirements_2: 'Must implement a server and database',
      requirements_3: 'Use an outside API',
      requirements_4: 'Must be approved by an instructor',
      requirements_5: null,
    })
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
  it('allows admins to add a challenge to the database', (done) => {
    supertest(app)
    .put('/api/challenges/4')
    .set('Cookie', 'authToken=adminToken')
    .set('Accept', 'application/json')
    .send({
      id: 4,
      name: 'Full-stack Side Project',
      point_value: 250,
      description: 'Develop a side project using curriculum technology.',
      campus_id: 1,
      category_id: 1,
      requirements_1: 'Must implement a front end',
      requirements_2: 'Must implement a server and database',
      requirements_3: null,
      requirements_4: null,
      requirements_5: null,
    })
    .expect((challenge) => {
      delete challenge.body.created_at;
      delete challenge.body.updated_at;
    })
    .expect(200, {
      id: 4,
      name: 'Full-stack Side Project',
      point_value: 250,
      description: 'Develop a side project using curriculum technology.',
      campus_id: 1,
      category_id: 1,
      requirements_1: 'Must implement a front end',
      requirements_2: 'Must implement a server and database',
      requirements_3: 'Use an outside API',
      requirements_4: 'Must be approved by an instructor',
      requirements_5: null,
    }, done);
  });
});

describe('GET challenges/:id', () => {
  it('responds with 401 status if user is not logged in', (done) => {
    supertest(app)
    .get('/api/students')
    .expect('Content-Type', /plain/)
    .expect(401, 'You must be logged in', done);
  });
  it('responds with JSON if user is logged in', (done) => {
    supertest(app)
    .get('/api/challenges/1')
    .set('Cookie', 'authToken=adminToken')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
  it('responds with a single challenge specificied by id', (done) => {
    supertest(app)
    .get('/api/challenges/1')
    .set('Cookie', 'authToken=adminToken')
    .set('Accept', 'application/json')
    .expect((challenge) => {
      delete challenge.body.created_at;
      delete challenge.body.updated_at;
    })
    .expect(200, {
      id: 1,
      name: 'Hold TA Hours',
      point_value: 25,
      description: 'Hold TA hours for a junior cohort (1 hour increments).',
      campus_id: 1,
      category_id: 2,
      requirements_1: 'Hold hours between 5pm and 6pm or during lab time',
      requirements_2: null,
      requirements_3: null,
      requirements_4: null,
      requirements_5: null,
    }, done);
  });
});

describe('DELETE challenges/:challenge_id', () => {
  it('responds with 401 status if user is not an admin', (done) => {
    supertest(app)
    .delete('/api/challenges/1')
    .expect(401, done);
  });
  it('should respond with success message if challenge is deleted', (done) => {
    supertest(app)
    .delete('/api/challenges/6')
    .set('Cookie', 'authToken=adminToken')
    .set('Accept', 'application/json')
    .expect(200, { message: 'Challenge successfully deleted' }, done);
  });
  it('should respond with 500 a challenge is specified which has a related challenge submission', (done) => {
    supertest(app)
    .delete('/api/challenges/10')
    .set('Cookie', 'authToken=adminToken')
    .set('Accept', 'Application/json')
    .expect(500, done);
  });
});
