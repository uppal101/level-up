import ChallengesTable from '../src/components/Student/challenges/challenge-table';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('ChallengesTable should render', () => {
  const store = mockStore({ lvlupApp });
  const challenge = shallow(
    <ChallengesTable store={store} />,
  );
  expect(shallowToJson(challenge)).toMatchSnapshot();
});
