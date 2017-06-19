import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import AddChallengeCompleted from '../src/components/Admin/challenges/add-challenge/add-challenge-completed';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('AddChallengeCompleted should render', () => {
  const store = mockStore({ lvlupApp });
  const completed = shallow(
    <AddChallengeCompleted addedChallenge={{ data: { name: 'Feed the Hamid', point_value: 5 } }} campuses={{ id: 1, location: 'SF' }} store={store} />,
  );
  expect(shallowToJson(completed)).toMatchSnapshot();
});
