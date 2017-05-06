import PendingRewards from '../src/components/Admin/admin-main-view/pending-rewards/requests-table';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('PendingRewards should render', () => {
  const store = mockStore({ lvlupApp });
  const approveReward = shallow(
    <PendingRewards store={store} />,
  );
  expect(shallowToJson(approveReward)).toMatchSnapshot();
});
