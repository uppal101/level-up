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

describe('GET /api/requests/cohorts/:cohort_id', () => {
  it('Should get all requests from all students in a cohort', (done) => {
    supertest(app)
      .get('/api/requests/cohorts/1')
      .set('Accept', 'application/json')
      .set('Cookie', 'authToken=adminToken')
      .expect((response) => {
        for (let i = 0; i < response.body.length; i++) {
          delete response.body[i].created_at;
          delete response.body[i].updated_at;
        }
      })
      .expect(200,
      [
        {
          id: 1,
          student_id: 2,
          reward_id: 6,
          cohort_id: 1,
          category_id: 1,
          status: 'Approved',
          notes: 'Looking forward to using this',
          reward: {
            id: 6,
            name: 'The "No You Google!" Card',
            point_cost: 15,
            description: 'The "No You Google!" Card allows a student veto an instructor "google it" response to a question, forcing the instructor to either answer the question or if necessary Google it themselves and report back with the answer.',
          },
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 2,
            username: 'leveluppal',
            name: 'Sanjeet Uppal',
          },
        },
        {
          id: 2,
          student_id: 1,
          reward_id: 7,
          cohort_id: 1,
          category_id: 2,
          status: 'Pending approval',
          notes: 'I would love to attend the next Community Meet and Eat',
          reward: {
            id: 7,
            name: 'Guaranteed Admission to Community Meet & Eat',
            point_cost: 20,
            description: 'This reward allows a student to secure a guaranteed admission to the next available Community Meet & Eat.',
          },
          category: {
            id: 2,
            category: 'Community',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
        },
        {
          id: 3,
          student_id: 3,
          reward_id: 8,
          cohort_id: 1,
          category_id: 3,
          status: 'Approved',
          notes: null,
          reward: {
            id: 8,
            name: 'Now You Are Official',
            point_cost: 250,
            description: 'A box of professionally designed personal business cards to aid you in your networking and career search.',
          },
          category: {
            id: 3,
            category: 'Career',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
        },
        {
          id: 4,
          student_id: 2,
          reward_id: 1,
          cohort_id: 1,
          category_id: 4,
          status: 'Approved',
          notes: null,
          reward: {
            id: 1,
            name: 'Gift Card to Gather',
            point_cost: 25,
            description: '$5 gift card to the Gather cafe. Limit one per student.',
          },
          category: {
            id: 4,
            category: 'Life',
          },
          student: {
            id: 2,
            username: 'leveluppal',
            name: 'Sanjeet Uppal',
          },
        },
        {
          id: 5,
          student_id: 2,
          reward_id: 8,
          cohort_id: 1,
          category_id: 3,
          status: 'Denied',
          notes: null,
          reward: {
            id: 8,
            name: 'Now You Are Official',
            point_cost: 250,
            description: 'A box of professionally designed personal business cards to aid you in your networking and career search.',
          },
          category: {
            id: 3,
            category: 'Career',
          },
          student: {
            id: 2,
            username: 'leveluppal',
            name: 'Sanjeet Uppal',
          },
        },
        {
          id: 6,
          student_id: 1,
          reward_id: 8,
          cohort_id: 1,
          category_id: 3,
          status: 'Denied',
          notes: null,
          reward: {
            id: 8,
            name: 'Now You Are Official',
            point_cost: 250,
            description: 'A box of professionally designed personal business cards to aid you in your networking and career search.',
          },
          category: {
            id: 3,
            category: 'Career',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
        },
        {
          id: 7,
          student_id: 3,
          reward_id: 8,
          cohort_id: 1,
          category_id: 3,
          status: 'Denied',
          notes: null,
          reward: {
            id: 8,
            name: 'Now You Are Official',
            point_cost: 250,
            description: 'A box of professionally designed personal business cards to aid you in your networking and career search.',
          },
          category: {
            id: 3,
            category: 'Career',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
        },
        {
          id: 8,
          student_id: 1,
          reward_id: 7,
          cohort_id: 1,
          category_id: 2,
          status: 'Approved',
          notes: 'Nice Work',
          reward: {
            id: 7,
            name: 'Guaranteed Admission to Community Meet & Eat',
            point_cost: 20,
            description: 'This reward allows a student to secure a guaranteed admission to the next available Community Meet & Eat.',
          },
          category: {
            id: 2,
            category: 'Community',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
        },
        {
          id: 9,
          student_id: 3,
          reward_id: 1,
          cohort_id: 1,
          category_id: 4,
          status: 'Approved',
          notes: null,
          reward: {
            id: 1,
            name: 'Gift Card to Gather',
            point_cost: 25,
            description: '$5 gift card to the Gather cafe. Limit one per student.',
          },
          category: {
            id: 4,
            category: 'Life',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
        },
        {
          id: 10,
          student_id: 1,
          reward_id: 8,
          cohort_id: 1,
          category_id: 3,
          status: 'Approved',
          notes: 'Please contact me with the card design',
          reward: {
            id: 8,
            name: 'Now You Are Official',
            point_cost: 250,
            description: 'A box of professionally designed personal business cards to aid you in your networking and career search.',
          },
          category: {
            id: 3,
            category: 'Career',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
        },
        {
          id: 11,
          student_id: 2,
          reward_id: 7,
          cohort_id: 1,
          category_id: 2,
          status: 'Pending approval',
          notes: null,
          reward: {
            id: 7,
            name: 'Guaranteed Admission to Community Meet & Eat',
            point_cost: 20,
            description: 'This reward allows a student to secure a guaranteed admission to the next available Community Meet & Eat.',
          },
          category: {
            id: 2,
            category: 'Community',
          },
          student: {
            id: 2,
            username: 'leveluppal',
            name: 'Sanjeet Uppal',
          },
        },
        {
          id: 12,
          student_id: 3,
          reward_id: 7,
          cohort_id: 1,
          category_id: 2,
          status: 'Pending approval',
          notes: null,
          reward: {
            id: 7,
            name: 'Guaranteed Admission to Community Meet & Eat',
            point_cost: 20,
            description: 'This reward allows a student to secure a guaranteed admission to the next available Community Meet & Eat.',
          },
          category: {
            id: 2,
            category: 'Community',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
        },
        {
          id: 13,
          student_id: 1,
          reward_id: 4,
          cohort_id: 1,
          category_id: 4,
          status: 'Approved',
          notes: null,
          reward: {
            id: 4,
            name: 'Gift Card to Gather',
            point_cost: 250,
            description: '$50 gift card to the Gather cafe. Limit one per student.',
          },
          category: {
            id: 4,
            category: 'Life',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
        },
        {
          id: 14,
          student_id: 1,
          reward_id: 6,
          cohort_id: 1,
          category_id: 1,
          status: 'Pending approval',
          notes: null,
          reward: {
            id: 6,
            name: 'The "No You Google!" Card',
            point_cost: 15,
            description: 'The "No You Google!" Card allows a student veto an instructor "google it" response to a question, forcing the instructor to either answer the question or if necessary Google it themselves and report back with the answer.',
          },
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
        },
        {
          id: 15,
          student_id: 2,
          reward_id: 8,
          cohort_id: 1,
          category_id: 3,
          status: 'Approved',
          notes: 'These will be great for networking!',
          reward: {
            id: 8,
            name: 'Now You Are Official',
            point_cost: 250,
            description: 'A box of professionally designed personal business cards to aid you in your networking and career search.',
          },
          category: {
            id: 3,
            category: 'Career',
          },
          student: {
            id: 2,
            username: 'leveluppal',
            name: 'Sanjeet Uppal',
          },
        },
        {
          id: 16,
          student_id: 2,
          reward_id: 5,
          cohort_id: 1,
          category_id: 4,
          status: 'Pending approval',
          notes: null,
          reward: {
            id: 5,
            name: 'Gift Card to Gather',
            point_cost: 500,
            description: '$100 gift card to the Gather cafe. Limit one per student.',
          },
          category: {
            id: 4,
            category: 'Life',
          },
          student: {
            id: 2,
            username: 'leveluppal',
            name: 'Sanjeet Uppal',
          },
        },
        {
          id: 17,
          student_id: 3,
          reward_id: 7,
          cohort_id: 1,
          category_id: 2,
          status: 'Approved',
          notes: null,
          reward: {
            id: 7,
            name: 'Guaranteed Admission to Community Meet & Eat',
            point_cost: 20,
            description: 'This reward allows a student to secure a guaranteed admission to the next available Community Meet & Eat.',
          },
          category: {
            id: 2,
            category: 'Community',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
        },
        {
          id: 18,
          student_id: 3,
          reward_id: 6,
          cohort_id: 1,
          category_id: 1,
          status: 'Pending approval',
          notes: null,
          reward: {
            id: 6,
            name: 'The "No You Google!" Card',
            point_cost: 15,
            description: 'The "No You Google!" Card allows a student veto an instructor "google it" response to a question, forcing the instructor to either answer the question or if necessary Google it themselves and report back with the answer.',
          },
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 3,
            username: 'dan_m_g',
            name: 'Daniel Gardner',
          },
        },
        {
          id: 19,
          student_id: 4,
          reward_id: 1,
          cohort_id: 1,
          category_id: 4,
          status: 'Approved',
          notes: null,
          reward: {
            id: 1,
            name: 'Gift Card to Gather',
            point_cost: 25,
            description: '$5 gift card to the Gather cafe. Limit one per student.',
          },
          category: {
            id: 4,
            category: 'Life',
          },
          student: {
            id: 4,
            username: 'lvl^-Demo',
            name: 'lvl^ - Demo',
          },
        },
        {
          id: 20,
          student_id: 4,
          reward_id: 11,
          cohort_id: 1,
          category_id: 3,
          status: 'Pending approval',
          notes: 'Would love to pair program with any instructor',
          reward: {
            id: 11,
            name: 'Instructor Pair Programming',
            point_cost: 300,
            description: 'Pair program with the instructor of your choice for 30 minutes.',
          },
          category: {
            id: 3,
            category: 'Career',
          },
          student: {
            id: 4,
            username: 'lvl^-Demo',
            name: 'lvl^ - Demo',
          },
        },
        {
          id: 21,
          student_id: 4,
          reward_id: 6,
          cohort_id: 1,
          category_id: 1,
          status: 'Pending approval',
          notes: null,
          reward: {
            id: 6,
            name: 'The "No You Google!" Card',
            point_cost: 15,
            description: 'The "No You Google!" Card allows a student veto an instructor "google it" response to a question, forcing the instructor to either answer the question or if necessary Google it themselves and report back with the answer.',
          },
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 4,
            username: 'lvl^-Demo',
            name: 'lvl^ - Demo',
          },
        },
        {
          id: 22,
          student_id: 4,
          reward_id: 7,
          cohort_id: 1,
          category_id: 2,
          status: 'Pending approval',
          notes: null,
          reward: {
            id: 7,
            name: 'Guaranteed Admission to Community Meet & Eat',
            point_cost: 20,
            description: 'This reward allows a student to secure a guaranteed admission to the next available Community Meet & Eat.',
          },
          category: {
            id: 2,
            category: 'Community',
          },
          student: {
            id: 4,
            username: 'lvl^-Demo',
            name: 'lvl^ - Demo',
          },
        },
      ], done);
  });
  it('Should return unauthorized when not logged in', (done) => {
    supertest(app)
      .get('/api/requests/cohorts/1')
      .set('Accept', 'application/json')
      .expect(401, 'Unauthorize', done);
  });
});

describe('GET requests/students/:student_id', () => {
  it('Should get all requests from a specific students', (done) => {
    supertest(app)
      .get('/api/requests/students/1')
      .set('Accept', 'application/json')
      .set('Cookie', 'authToken=adminToken')
      .expect((response) => {
        for (let i = 0; i < response.body.length; i++) {
          delete response.body[i].created_at;
          delete response.body[i].updated_at;
        }
      })
      .expect(200,
      [
        {
          id: 2,
          student_id: 1,
          reward_id: 7,
          cohort_id: 1,
          category_id: 2,
          status: 'Pending approval',
          notes: 'I would love to attend the next Community Meet and Eat',
          reward: {
            id: 7,
            name: 'Guaranteed Admission to Community Meet & Eat',
            point_cost: 20,
            description: 'This reward allows a student to secure a guaranteed admission to the next available Community Meet & Eat.',
          },
          category: {
            id: 2,
            category: 'Community',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
        },
        {
          id: 6,
          student_id: 1,
          reward_id: 8,
          cohort_id: 1,
          category_id: 3,
          status: 'Denied',
          notes: null,
          reward: {
            id: 8,
            name: 'Now You Are Official',
            point_cost: 250,
            description: 'A box of professionally designed personal business cards to aid you in your networking and career search.',
          },
          category: {
            id: 3,
            category: 'Career',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
        },
        {
          id: 8,
          student_id: 1,
          reward_id: 7,
          cohort_id: 1,
          category_id: 2,
          status: 'Approved',
          notes: 'Nice Work',
          reward: {
            id: 7,
            name: 'Guaranteed Admission to Community Meet & Eat',
            point_cost: 20,
            description: 'This reward allows a student to secure a guaranteed admission to the next available Community Meet & Eat.',
          },
          category: {
            id: 2,
            category: 'Community',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
        },
        {
          id: 10,
          student_id: 1,
          reward_id: 8,
          cohort_id: 1,
          category_id: 3,
          status: 'Approved',
          notes: 'Please contact me with the card design',
          reward: {
            id: 8,
            name: 'Now You Are Official',
            point_cost: 250,
            description: 'A box of professionally designed personal business cards to aid you in your networking and career search.',
          },
          category: {
            id: 3,
            category: 'Career',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
        },
        {
          id: 13,
          student_id: 1,
          reward_id: 4,
          cohort_id: 1,
          category_id: 4,
          status: 'Approved',
          notes: null,
          reward: {
            id: 4,
            name: 'Gift Card to Gather',
            point_cost: 250,
            description: '$50 gift card to the Gather cafe. Limit one per student.',
          },
          category: {
            id: 4,
            category: 'Life',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
        },
        {
          id: 14,
          student_id: 1,
          reward_id: 6,
          cohort_id: 1,
          category_id: 1,
          status: 'Pending approval',
          notes: null,
          reward: {
            id: 6,
            name: 'The "No You Google!" Card',
            point_cost: 15,
            description: 'The "No You Google!" Card allows a student veto an instructor "google it" response to a question, forcing the instructor to either answer the question or if necessary Google it themselves and report back with the answer.',
          },
          category: {
            id: 1,
            category: 'Education',
          },
          student: {
            id: 1,
            username: 'algorythmist',
            name: 'Thomas Stang',
          },
        },
      ], done);
  });
  it('Should return unauthorized when not logged in', (done) => {
    supertest(app)
      .get('/api/requests/cohorts/1')
      .set('Accept', 'application/json')
      .expect(401, 'Unauthorize', done);
  });
});

describe('POST /requests', () => {
  it('Should add a request to the database', (done) => {
    const newRequest = {
      student_id: 1,
      reward_id: 2,
      cohort_id: 1,
      notes: 'Here is my new request!',
      category_id: 4,
      status: 'Pending approval',
    };
    supertest(app)
      .post('/api/requests')
      .set('Accept', 'application/json')
      .set('Cookie', 'authToken=adminToken')
      .send(newRequest)
      .expect((response) => {
        delete response.body.created_at;
        delete response.body.updated_at;
      })
      .expect(200,
      {
        student_id: 1,
        reward_id: 2,
        cohort_id: 1,
        notes: 'Here is my new request!',
        category_id: 4,
        status: 'Pending approval',
        id: 23,
      }, done);
  });
  it('Should return unauthorized when not logged in', (done) => {
    supertest(app)
      .get('/api/requests/cohorts/1')
      .set('Accept', 'application/json')
      .expect(401, 'Unauthorize', done);
  });
});

describe('GET requests/:request_id', () => {
  it('Should get a specific request from the database', (done) => {
    supertest(app)
      .get('/api/requests/1')
      .set('Accept', 'application/json')
      .set('Cookie', 'authToken=adminToken')
      .expect((response) => {
        delete response.body.created_at;
        delete response.body.updated_at;
      })
      .expect(200,
      {
        id: 1,
        student_id: 2,
        reward_id: 6,
        cohort_id: 1,
        category_id: 1,
        status: 'Approved',
        notes: 'Looking forward to using this',
        reward: {
          id: 6,
          name: 'The "No You Google!" Card',
          point_cost: 15,
          description: 'The "No You Google!" Card allows a student veto an instructor "google it" response to a question, forcing the instructor to either answer the question or if necessary Google it themselves and report back with the answer.',
        },
        category: {
          id: 1,
          category: 'Education',
        },
        student: {
          id: 2,
          username: 'leveluppal',
          name: 'Sanjeet Uppal',
        },
      }, done);
  });
  it('Should return unauthorized when not logged in', (done) => {
    supertest(app)
      .get('/api/requests/cohorts/1')
      .set('Accept', 'application/json')
      .expect(401, 'Unauthorize', done);
  });
});

describe('DELETE requests/:request_id', () => {
  it('Should delete a specific request to the database', (done) => {
    supertest(app)
      .delete('/api/requests/1')
      .set('Accept', 'application/json')
      .set('Cookie', 'authToken=adminToken')
      .expect(200, { message: 'Request successfully deleted' }, done);
  });
  it('Should return unauthorized when not logged in', (done) => {
    supertest(app)
      .get('/api/requests/cohorts/1')
      .set('Accept', 'application/json')
      .expect(401, 'Unauthorize', done);
  });
});

describe('PUT /requests/:request_id', () => {
  it('Should update a request to the database', (done) => {
    const edited = {
      notes: 'Here is a new note',
    };
    supertest(app)
      .put('/api/requests/2')
      .set('Accept', 'application/json')
      .set('Cookie', 'authToken=adminToken')
      .send(edited)
      .expect((response) => {
        delete response.body.created_at;
        delete response.body.updated_at;
      })
      .expect(200, {
        id: 2,
        student_id: 1,
        reward_id: 7,
        cohort_id: 1,
        category_id: 2,
        status: 'Pending approval',
        notes: 'Here is a new note',
      }, done);
  });
  it('Should return unauthorized when not logged in', (done) => {
    supertest(app)
      .get('/api/requests/cohorts/1')
      .set('Accept', 'application/json')
      .expect(401, 'Unauthorize', done);
  });
});

describe('PUT /requests/:request_id/admin', () => {
  it('Should update a request to the database', (done) => {
    const approved = {
      status: { status: 'Approved' },
    };
    supertest(app)
      .put('/api/requests/2/admin')
      .set('Accept', 'application/json')
      .set('Cookie', 'authToken=adminToken')
      .send(approved)
      .expect((response) => {
        delete response.body.created_at;
        delete response.body.updated_at;
      })
      .expect(200, {
        id: 2,
        student_id: 1,
        reward_id: 7,
        cohort_id: 1,
        category_id: 2,
        status: 'Approved',
        notes: 'I would love to attend the next Community Meet and Eat',
      }, done);
  });
  it('Should return unauthorized when not logged in', (done) => {
    supertest(app)
      .get('/api/requests/cohorts/1')
      .set('Accept', 'application/json')
      .expect(401, 'Unauthorize', done);
  });
});
