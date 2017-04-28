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
        description: 'Hold TA hours for a junior cohort (1 hour increments) during lab time or directly following conclusion of class hours (5-6pm).',
        campus_id: 1,
        category_id: 2,
        requirements_1: null,
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
      },
      {
        id: 2,
        name: 'Front-end Side Project',
        point_value: 75,
        description: 'Develop a side project using curriculum technology.',
        campus_id: 1,
        category_id: 1,
        requirements_1: null,
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
      },
      {
        id: 3,
        name: 'Back-end Side Project',
        point_value: 75,
        description: 'Develop a side project using curriculum technology.',
        campus_id: 1,
        category_id: 1,
        requirements_1: null,
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
      },
      {
        id: 4,
        name: 'Full-stack Side Project',
        point_value: 200,
        description: 'Develop a side project using curriculum technology.',
        campus_id: 1,
        category_id: 1,
        requirements_1: null,
        requirements_2: null,
        requirements_3: null,
        requirements_4: null,
        requirements_5: null,
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
      id: 6,
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
      requirements_3: null,
      requirements_4: null,
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
      requirements_3: null,
      requirements_4: null,
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
      description: 'Hold TA hours for a junior cohort (1 hour increments) during lab time or directly following conclusion of class hours (5-6pm).',
      campus_id: 1,
      category_id: 2,
      requirements_1: null,
      requirements_2: null,
      requirements_3: null,
      requirements_4: null,
      requirements_5: null,
    }, done);
  });
});

//
// describe('GET students/:id', () => {
//   it('responds with JSON', (done) => {
//     supertest(app)
//     .get('/api/students/1')
//     .expect('Content-Type', /json/)
//     .expect(200, done);
//   });
//   it('responds with a single student specificied by id', (done) => {
//     supertest(app)
//     .get('/api/students/1')
//     .set('Accept', 'application/json')
//     .expect((student) => {
//       delete student.body.created_at;
//       delete student.body.updated_at;
//     })
//     .expect(200,
//       {
//         id: 1,
//         name: 'Thomas Stang',
//         email: 'stang.tk@gmail.com',
//         github_user_name: 'tkstang',
//         photo_url: null,
//         gravatar_url: null,
//         cohort_id: 1,
//         username: 'algorythmist',
//       }, done);
//   });
// });
//
// describe('DELETE students/:id', () => {
//   it('should respond respond with success message if student is deleted', (done) => {
//     supertest(app)
//       .delete('/api/students/1')
//       .set('Accept', 'application/json')
//       .expect(200, { message: 'Student successfully deleted' }, done);
//   });
//   it('should respond with 500 if invalid parameter is given', (done) => {
//     supertest(app)
//       .delete('/api/students/6')
//       .set('Accept', 'Application/json')
//       .expect(500, done);
//   });
// });
//
// describe('PUT students/:id', () => {
//   it('responds with JSON', (done) => {
//     supertest(app)
//     .put('/api/students/1')
//     .expect('Content-Type', /json/)
//     .expect(200, done);
//   });
//   it('responds with updated student', (done) => {
//     supertest(app)
//     .put('/api/students/1')
//     .set('Accept', 'application/json')
//     .send({ username: 'tommyboy' })
//     .expect((student) => {
//       delete student.body.created_at;
//       delete student.body.updated_at;
//     })
//     .expect(200,
//       {
//         id: 1,
//         name: 'Thomas Stang',
//         email: 'stang.tk@gmail.com',
//         github_user_name: 'tkstang',
//         photo_url: null,
//         gravatar_url: null,
//         cohort_id: 1,
//         username: 'tommyboy',
//       }, done);
//   });
// });
//
// describe('GET students/campuses/:campus_id', () => {
//   it('responds with JSON', (done) => {
//     supertest(app)
//     .get('/api/students/campuses/1')
//     .expect('Content-Type', /json/)
//     .expect(200, done);
//   });
//   it('responds with all students in the database for a given campus', (done) => {
//     supertest(app)
//     .get('/api/students/campuses/1')
//     .set('Accept', 'application/json')
//     .expect(students => students.body.forEach((student) => {
//       delete student.created_at;
//       delete student.updated_at;
//     }))
//     .expect(200, [
//       {
//         id: 1,
//         name: 'Thomas Stang',
//         email: 'stang.tk@gmail.com',
//         github_user_name: 'tkstang',
//         photo_url: null,
//         gravatar_url: null,
//         cohort_id: 1,
//         username: 'algorythmist',
//       },
//       {
//         id: 2,
//         name: 'Sanjeet Uppal',
//         email: 'sanjeet.uppal92@gmail.com',
//         github_user_name: 'uppal101',
//         photo_url: null,
//         gravatar_url: null,
//         cohort_id: 1,
//         username: 'leveluppal',
//       },
//       {
//         id: 3,
//         name: 'Daniel Gardner',
//         email: 'daniel.marc.gardner@gmail.com',
//         github_user_name: 'danielmarcgardner',
//         photo_url: 'https://avatars2.githubusercontent.com/u/22782154?v=3',
//         gravatar_url: null,
//         cohort_id: 1,
//         username: 'dan_m_g',
//       },
//     ], done);
//   });
// });
//
// describe('GET students/cohorts/:cohort_id', () => {
//   it('responds with JSON', (done) => {
//     supertest(app)
//     .get('/api/students/cohorts/1')
//     .expect('Content-Type', /json/)
//     .expect(200, done);
//   });
//   it('responds with all students in the database for a given cohort', (done) => {
//     supertest(app)
//     .get('/api/students/cohorts/1')
//     .set('Accept', 'application/json')
//     .expect(students => students.body.forEach((student) => {
//       delete student.created_at;
//       delete student.updated_at;
//     }))
//     .expect(200, [
//       {
//         id: 1,
//         name: 'Thomas Stang',
//         email: 'stang.tk@gmail.com',
//         github_user_name: 'tkstang',
//         photo_url: null,
//         gravatar_url: null,
//         cohort_id: 1,
//         username: 'algorythmist',
//       },
//       {
//         id: 2,
//         name: 'Sanjeet Uppal',
//         email: 'sanjeet.uppal92@gmail.com',
//         github_user_name: 'uppal101',
//         photo_url: null,
//         gravatar_url: null,
//         cohort_id: 1,
//         username: 'leveluppal',
//       },
//       {
//         id: 3,
//         name: 'Daniel Gardner',
//         email: 'daniel.marc.gardner@gmail.com',
//         github_user_name: 'danielmarcgardner',
//         photo_url: 'https://avatars2.githubusercontent.com/u/22782154?v=3',
//         gravatar_url: null,
//         cohort_id: 1,
//         username: 'dan_m_g',
//       },
//     ], done);
//   });
// });
