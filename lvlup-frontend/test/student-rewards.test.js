import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';
import StudentRewards from '../src/components/Student/rewards/rewards-main';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('StudentRewards should render', () => {
  const store = mockStore({ lvlupApp });
  const reward = shallow(
    <StudentRewards store={store} />,
  );
  expect(shallowToJson(reward)).toMatchSnapshot();
});
