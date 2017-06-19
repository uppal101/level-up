import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import AddRewardForm from '../src/components/Admin/rewards/add-reward/add-reward-form';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('AddRewardForm should render', () => {
  const store = mockStore({ lvlupApp });
  const add = shallow(
    <AddRewardForm campuses={5} handleSubmit={jest.fn} store={store} map={jest.fn} />,
  );
  expect(shallowToJson(add)).toMatchSnapshot();
});
