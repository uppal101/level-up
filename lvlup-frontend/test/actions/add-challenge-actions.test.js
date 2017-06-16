import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../src/actions/add-challenge';
import * as types from '../../src/constants/constants';
import * as reducer from '../../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('add challenge actions', () => {
  it('should create an action reset add challenge', () => {
    const expectedAction = {
      type: types.RESET_ADD_CHALLENGE,
    };
    expect(actions.resetAddChallenge()).toEqual(expectedAction);
  });
});

describe('add challenge async actions', () => {
  it('should allow an admin to add a challenge', () => {
    mock.onPost('/api/challenges').reply(200, { payload: { test: 1 } });

    const expectedActions = { type: types.ADD_CHALLENGE_FULFILLED, payload: { test: 1 } };

    const store = mockStore(
       { reducer: { test: 1 } });

    return store.dispatch(actions.addChallenge({ payload: { test: 1 } }))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
