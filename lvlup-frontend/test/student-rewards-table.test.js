import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import StudentRewardsTable from '../src/components/Student/rewards/rewards-table';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('StudentRewardsTable should render', () => {
  const store = mockStore({ lvlupApp });
  const reward = shallow(
    <StudentRewardsTable rewards={{ rewards: { length: 5 } }} store={store} />,
  );
  expect(shallowToJson(reward)).toMatchSnapshot();
});
