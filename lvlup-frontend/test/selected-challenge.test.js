import SelectedChallenge from '../src/components/Admin/challenges/admin-challenges/individual-submission';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('SelectedChallenge should render', () => {
  const store = mockStore({ lvlupApp });
  const challenge = shallow(
    <SelectedChallenge selectedChallenge={{ id: 1, challenge: { name: 'Feed the Hamid' }, category: { category: 'Life' }, student: 'Thomas Stang' }} adminLoginInfo={{ cohorts: ['g42', 'g52'] }} store={store} />,
  );
  expect(shallowToJson(challenge)).toMatchSnapshot();
});
