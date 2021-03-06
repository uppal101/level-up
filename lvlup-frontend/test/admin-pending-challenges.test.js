import PendingChallenges from '../src/components/Admin/admin-main-view/pending-challenges/challenges-table';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('PendingChallenges should render', () => {
  const store = mockStore({ lvlupApp });
  const approveChallenge = shallow(
    <PendingChallenges store={store} />,
  );
  expect(shallowToJson(approveChallenge)).toMatchSnapshot();
});
