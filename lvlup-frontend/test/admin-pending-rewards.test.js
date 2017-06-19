import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';
import PendingRewards from '../src/components/Admin/dashboard/pending-requests';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('PendingRewards should render', () => {
  const store = mockStore({ lvlupApp });
  const approveReward = shallow(
    <PendingRewards pendingRequests={{ requestsAdmin: { length: 5 } }} store={store} />,
  );
  expect(shallowToJson(approveReward)).toMatchSnapshot();
});
