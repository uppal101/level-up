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
    .expect(401, 'Unauthorize', done);
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
        active: 'Active',
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
        active: 'Active',
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
        active: 'Active',
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
        active: 'Active',
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
        active: 'Active',
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
        active: 'Active',
        category: {
          id: 4,
          category: 'Life',
        },
      },
      { id: 7,
        name: 'Code Review a Project for a Student in a Lower Cohort ',
        point_value: 25,
        description: 'Review the code and provide helpful suggestions on how they can improve their code.',
        campus_id: 1,
        category_id: 1,
        requirements_1: 'Must be approved by an instructor',
        requirements_2: 'Please link the repo',
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: { id: 1, category: 'Education' } },
      { id: 8,
        name: 'Lead a White Boarding Session at Lunch for a Junior Cohort',
        point_value: 15,
        description: 'Lead a white boarding session to help reinforce concepts for a junior cohort',
        campus_id: 1,
        category_id: 2,
        requirements_1: 'Please take a picture',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: { id: 2, category: 'Community' } },
      { id: 9,
        name: 'Attend a Conference',
        point_value: 30,
        description: 'Attend a developer conference outside of class time.',
        campus_id: 1,
        category_id: 3,
        requirements_1: 'Please submit receipt of attendance or a picture',
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: { id: 3, category: 'Career' } },
      { id: 10,
        name: 'Learn a New Technology Not Taught by Galvanize',
        point_value: 200,
        description: 'Learn a new technology and complete a small project based on the new technology',
        campus_id: 1,
        category_id: 1,
        requirements_1: 'Not taught by Galvanize',
        requirements_2: 'Must provide link to Repo',
        requirements_3: 'Must be approved by an instructor',
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: { id: 1, category: 'Education' } },
      { id: 11,
        name: 'Provide a Warm Intro to Another Student',
        point_value: 10,
        description: 'Provide a warm introduction to another student to help aide them in their job search.',
        campus_id: 1,
        category_id: 3,
        requirements_1: null,
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: { id: 3, category: 'Career' } },
      { id: 12,
        name: 'Host a meet-up',
        point_value: 10,
        description: 'Host a one time technology based meetup.',
        campus_id: 1,
        category_id: 2,
        requirements_1: null,
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
        active: 'Active',
        category: { id: 2, category: 'Community' },
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
      name: 'Feed All Teachers',
      point_value: 0,
      description: 'Buy lunch for your instructors.',
      campus_id: 1,
      category_id: 4,
      requirements_1: null,
      requirements_2: null,
      requirements_3: null,
      requirements_4: null,
      requirements_5: null,
      active: 'Active',
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
      name: 'Feed All Teachers',
      point_value: 0,
      description: 'Buy lunch for your instructors.',
      campus_id: 1,
      category_id: 4,
      requirements_1: null,
      requirements_2: null,
      requirements_3: null,
      requirements_4: null,
      requirements_5: null,
      active: 'Active',
    })
    .expect((challenge) => {
      delete challenge.body.created_at;
      delete challenge.body.updated_at;
    })
    .expect(200, {
      id: 13,
      name: 'Feed All Teachers',
      point_value: 0,
      description: 'Buy lunch for your instructors.',
      campus_id: 1,
      category_id: 4,
      requirements_1: null,
      requirements_2: null,
      requirements_3: null,
      requirements_4: null,
      requirements_5: null,
      active: 'Active',
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
      active: 'Active',
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
      active: 'Active',
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
      active: 'Active',
    }, done);
  });
});

describe('GET challenges/:id', () => {
  it('responds with 401 status if user is not logged in', (done) => {
    supertest(app)
    .get('/api/students')
    .expect('Content-Type', /plain/)
    .expect(401, 'Unauthorize', done);
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
      active: 'Active',
    }, done);
  });
});
