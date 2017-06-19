import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import EditRewardCompleted from '../src/components/Admin/rewards/edit-reward/edit-reward-completed';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('EditRewardCompleted should render', () => {
  const store = mockStore({ lvlupApp });
  const edit = shallow(
    <EditRewardCompleted editedReward={{ data: { name: 'Pizza Party', point_cost: 75, description: 'Points are per person' } }} store={store} />,
  );
  expect(shallowToJson(edit)).toMatchSnapshot();
});
