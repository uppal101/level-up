import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect';
import * as actions from '../src/actions/add-challenge';
import * as types from '../src/constants/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('add challenge actions', () => {
  it('should create an action reset add challenge', () => {
    const expectedAction = {
      type: types.RESET_ADD_CHALLENGE,
    };
    expect(actions.resetAddChallenge()).toEqual(expectedAction);
  });
});

describe('add challenge async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should allow an admin to add a challenge', () => {
    nock('http://lvlup-galvanize.herokuapp.com/')
    .post('/api/challenges')
    .reply(200, { body: { name: 'Participate in pushup hour', point_value: 1, description: 'Commit to a healthy lifestyle', campus_id: 1, category_id: 4, requirement_1: ' Must do some form of exercise for at least 2 minutes' } });

    const expectedActions = { type: types.ADD_CHALLENGE_FULFILLED, payload: { name: 'Participate in pushup hour', point_value: 1, description: 'Commit to a healthy lifestyle', campus_id: 1, category_id: 4, requirement_1: ' Must do some form of exercise for at least 2 minutes' } };


    const store = mockStore({ state: {} });

    return store.dispatch(actions.addChallenge({ payload: { name: 'Participate in pushup hour', point_value: 1, description: 'Commit to a healthy lifestyle', campus_id: 1, category_id: 4, requirement_1: ' Must do some form of exercise for at least 2 minutes' } }))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
