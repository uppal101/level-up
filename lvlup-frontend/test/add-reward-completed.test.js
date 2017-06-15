import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import AddRewardCompleted from '../src/components/Admin/rewards/add-reward/add-reward-completed-table';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('AddRewardCompleted should render', () => {
  const store = mockStore({ lvlupApp });
  const completed = shallow(
    <AddRewardCompleted store={store} />,
  );
  expect(shallowToJson(completed)).toMatchSnapshot();
});
