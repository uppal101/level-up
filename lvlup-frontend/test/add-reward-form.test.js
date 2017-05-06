import AddRewardForm from '../src/components/Admin/admin-add-reward/add-reward-form';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('AddRewardForm should render', () => {
  const store = mockStore({ lvlupApp });
  const add = shallow(
    <AddRewardForm store={store} />,
  );
  expect(shallowToJson(add)).toMatchSnapshot();
});
