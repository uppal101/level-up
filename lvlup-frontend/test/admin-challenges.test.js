import AdminChallenges from '../src/components/Admin/challenges/admin-challenges/challenges-container';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('AdminChallenges should render', () => {
  const store = mockStore({ lvlupApp });
  const adminchallenges = shallow(
    <AdminChallenges store={store} />,
  );
  expect(shallowToJson(adminchallenges)).toMatchSnapshot();
});
